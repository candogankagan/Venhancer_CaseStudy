import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const Button = ({title, onPress, icon, disabled = false, styleOverrides}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      disabled={disabled}
      hitSlop={styles.hitSlop}
      style={[
        styles.container,
        styleOverrides?.container,
        {opacity: disabled ? 0.6 : 1},
      ]}>
      {icon && <View style={styleOverrides?.iconContainer}>{icon}</View>}
      {title && <Text style={styleOverrides?.title}>{title}</Text>}
    </TouchableOpacity>
  );
};

export default Button;
