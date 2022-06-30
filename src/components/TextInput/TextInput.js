import React from 'react';
import {StyleSheet, Text, TextInput as NativeTextInput} from 'react-native';

const TextInput = ({title, textInputProps, color}) => {
  const styles = Styles(color);
  return (
    <>
      {title && <Text style={styles.title}>{title}</Text>}
      <NativeTextInput {...textInputProps} style={styles.textInput} />
    </>
  );
};

export default TextInput;

const Styles = color =>
  StyleSheet.create({
    title: {
      color,
      fontSize: 14,
      marginTop: 24,
    },
    textInput: {
      borderColor: '#DEDEDE',
      borderWidth: 1,
      paddingHorizontal: 12,
      borderRadius: 8,
      marginTop: 8,
    },
  });
