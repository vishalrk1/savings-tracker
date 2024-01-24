import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {useTheme} from 'react-native-paper';

const FloatingButton = ({onClick}) => {
  const theme = useTheme();
  return (
    <TouchableOpacity
      onPress={onClick}
      style={{
        position: 'absolute',
        bottom: 20,
        right: 20,
        height: 60,
        width: 60,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={require('../../assets/plus.png')}
        style={{width: 40, height: 40}}
      />
    </TouchableOpacity>
  );
};

export default FloatingButton;
