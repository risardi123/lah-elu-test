import {color} from '../config.ts';
import {Text, TouchableOpacity, ViewStyle} from 'react-native';
import React from 'react';
import {styles} from './Button.style.tsx';

interface ButtonProps {
  style?: ViewStyle;
  onPress?: () => void;
  title?: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  prefix?: string;
}

export const Button = (props: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        props.style,
        {
          backgroundColor:
            props.backgroundColor || color.primaryBackgroundColor,
          borderColor: props.borderColor || color.primaryBorderColor,
        },
      ]}
      onPress={props.onPress}>
      {props.prefix && (
        <Text style={{color: props.textColor || color.black}}>
          {props.prefix}
        </Text>
      )}
      {props.title && (
        <Text
          style={[styles.buttonText, {color: props.textColor || color.black}]}>
          {props.title}
        </Text>
      )}
    </TouchableOpacity>
  );
};
