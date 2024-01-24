import {createClient} from '@supabase/supabase-js';
import { supabaseClient } from './supabaseClient';

// Function to sign up a user
export const signUp = async (
  email: string,
  password: string,
) => {
  const {data, error} = await supabaseClient.auth.signUp({
    email: email,
    password: password,
  });
  if (error) {
    throw error;
  }
  const user = data.user;
  return user;
};

// Function to sign in a user
export const signIn = async (email: string, password: string) => {
  const {data, error} = await supabaseClient.auth.signInWithPassword({
    email: email,
    password: password,
  });
  if (error) {
    throw error;
  }
  const user = data.user;
  return user;
};

// Function to sign out a user
export const signOut = async () => {
  const {error} = await supabaseClient.auth.signOut();
  if (error) {
    throw error;
  }
};

// Function to get the current user
export const getCurrentUser = async () => {
  const userData = await supabaseClient.auth.getUser();
  console.log(userData);
  return userData;
};

// Function to manage user login sessions
export const manageUserSessions = async () => {
  const {data, error} = await supabaseClient.auth.getSession();
  return data;
};
