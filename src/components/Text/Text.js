import React from 'react';
import {StyleSheet, Text as NativeText} from 'react-native';

const Text = ({
  children,
  color,
  fontFamily,
  fontSize,
  style,
  marginTop,
  marginBottom,
  numberOfLines,
}) => {
  const Style = Styles(color, fontFamily, fontSize, marginTop, marginBottom);
  return (
    <NativeText
      style={StyleSheet.flatten([Style.nativeText, style])}
      numberOfLines={numberOfLines}>
      {children}
    </NativeText>
  );
};

const Styles = (color, fontFamily, fontSize, marginTop, marginBottom) =>
  StyleSheet.create({
    nativeText: {
      color,
      fontFamily,
      fontSize,
      marginTop,
      marginBottom,
    },
  });

export default Text;
