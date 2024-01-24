import React from 'react'
import { Text, View } from 'react-native'

const ProfileScreen = () => {
  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: 'white',
      }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
        }}>
        Profile Screen
      </Text>
    </View>
  )
}

export default ProfileScreen