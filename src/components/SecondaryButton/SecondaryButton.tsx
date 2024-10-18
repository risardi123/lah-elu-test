import {
  borderRadius,
  borderSize,
  color,
  fontSize,
  gapSize,
  paddingSize,
} from '../config.ts';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

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

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: paddingSize.md,
    paddingHorizontal: paddingSize.lg,
    borderWidth: borderSize.sm,
    flexDirection: 'row',
    borderColor: color.primaryBorderColor,
    borderRadius: borderRadius.lg,
    gap: gapSize.sm,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: fontSize.lg,
    fontWeight: 'bold',
  },
});
