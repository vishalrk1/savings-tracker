import React, {useEffect} from 'react';
import {ActivityIndicator, ScrollView, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {
  getCurrentUser,
  manageUserSessions,
  signIn,
  signUp,
} from '../../utils/authUtils';
import {useUser} from '../../provider/userProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoadingScreen = () => {
  const navigation = useNavigation();
  const user = useUser();

  const checkUser = async () => {
    const token = await AsyncStorage.getItem('refreshToken');
    setTimeout(() => {
      console.log('Token: ', token);
      if (token) {
        navigation.navigate('BottomTabNavigator');
      } else {
        navigation.navigate('SignInScreen');
      }
    }, 2000);
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          gap: 12,
        }}>
        <ActivityIndicator size="large" color="red" />
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
          Loading...
        </Text>
      </View>
    </View>
  );
};

export default LoadingScreen;
