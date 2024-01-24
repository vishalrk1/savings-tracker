import React, {useEffect, useState, createContext, useContext} from 'react';
import {Session, User} from '@supabase/supabase-js';
import {supabaseClient} from '../utils/supabaseClient';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserContext = createContext<{
  user: User | null;
  session: Session | null;
}>({
  user: null,
  session: null,
});

export const UserContextProvider = (props: any) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const userStateChange = async () => {
    const session = (await supabaseClient.auth.getSession()).data.session;
    setSession(session);
    setUser(session?.user ?? null);
    const {data: authListener} = supabaseClient.auth.onAuthStateChange(
      async (event, session) => {
        console.log('event: ', event);
        if (event === 'INITIAL_SESSION') {
          const refreshToken = await AsyncStorage.getItem('refreshToken');
          const {data, error} = await supabaseClient.auth.refreshSession({
            refresh_token: refreshToken ?? '',
          });
          if (error) {
            console.log('error: ', error);
          } else {
            setSession(data.session ?? null);
            setUser(data?.user ?? null);
          }
        } else if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
          await AsyncStorage.setItem(
            'refreshToken',
            session?.refresh_token ?? '',
          );
          await AsyncStorage.setItem(
            'accessToken',
            session?.access_token ?? '',
          );
          setSession(session ?? null);
          setUser(session?.user ?? null);
        }
      },
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  };

  useEffect(() => {
    userStateChange();
  }, []);

  const value = {
    session,
    user,
  };
  return <UserContext.Provider value={value} {...props} />;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error(`useUser must be used within a UserContextProvider.`);
  }
  return context;
};
