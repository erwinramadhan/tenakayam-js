import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({
  children,
  text,
  backgroundColor,
  color,
  marginTop,
  fontFamily,
  onPress,
}) => {
  const style = Styles(backgroundColor, color, marginTop, fontFamily);
  return (
    <TouchableOpacity style={style.toucableOpacity} onPress={onPress}>
      {children ? children : <Text style={style.text}>{text}</Text>}
    </TouchableOpacity>
  );
};

export default Button;

const Styles = (backgroundColor, color, marginTop, fontFamily) =>
  StyleSheet.create({
    toucableOpacity: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 14,
      backgroundColor: backgroundColor && backgroundColor,
      borderRadius: 8,
      marginTop: marginTop && marginTop,
    },
    text: {
      color: color ? color : '#000000',
      fontFamily: fontFamily,
    },
  });
