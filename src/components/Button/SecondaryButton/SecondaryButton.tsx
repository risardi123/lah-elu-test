import {fontSize} from '../../config.ts';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './SecondaryButton.style.tsx';

interface SecondaryButtonProps {
  sideIcon?: boolean;
  sideIconName?: string;
  title?: string;
  onPress?: () => void;
}

export const SecondaryButton = (props: SecondaryButtonProps) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.buttonContainer}>
      {props.sideIcon && (
        <MaterialCommunityIcons
          name={props.sideIconName ?? ''}
          size={fontSize['2xl']}
        />
      )}
      {props.title && (
        <Text style={styles.buttonText}>{props.title.toString()}</Text>
      )}
    </TouchableOpacity>
  );
};
