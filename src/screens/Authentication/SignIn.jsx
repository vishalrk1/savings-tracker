import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Card, TextInput, Button, useTheme} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

import {signIn, signUp} from '../../utils/authUtils';
import { supabaseClient } from '../../utils/supabaseClient';

const SignInScreen = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = async () => {
    console.log(email, password);
    try {
      const {data, error} = await supabaseClient.auth.signInWithPassword({
        email: email,
        password: password,
      });
      if (error) {
        throw error;
      }

      // console.log(data)

      if (data.user) {
        navigation.navigate('BottomTabNavigator');
      } else {
        alert('Something went wrong');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.primaryContainer,
      }}>
      <Card style={{width: '90%', backgroundColor: 'white'}}>
        <View style={{padding: 20, flexDirection: 'column', gap: 12}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 26,
              color: 'black',
              fontWeight: 500,
            }}>
            Sign In
          </Text>
          <TextInput
            label="Email"
            mode="outlined"
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            label="Password"
            mode="outlined"
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{color: 'blue', flex: 2}}>Forgot Password?</Text>
            <Button
              mode="contained"
              style={{flex: 1}}
              labelStyle={{fontSize: 16}}
              onPress={handleSubmit}>
              Sign In
            </Button>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default SignInScreen;
