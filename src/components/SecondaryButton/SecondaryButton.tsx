import {
  borderRadius,
  borderSize,
  color,
  fontSize,
  gapSize,
  paddingSize,
} from '../config.ts';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
interface SecondaryButton {
  sideIcon?: boolean;
  sideIconName?: string;
  title?: string;
  onPress?: () => void;
}
export const SecondaryButton = (props: SecondaryButton) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        paddingVertical: paddingSize.md,
        paddingHorizontal: paddingSize.lg,
        borderWidth: borderSize.sm,
        flexDirection: 'row',
        borderColor: color.primaryBorderColor,
        borderRadius: borderRadius.lg,
        gap: gapSize.sm,
        alignItems: 'center',
      }}>
      {props.sideIcon && (
        <MaterialCommunityIcons
          name={props.sideIconName ?? ''}
          size={fontSize['2xl']}
        />
      )}
      {props.title && (
        <Text
          style={{
            fontSize: fontSize.lg,
            fontWeight: 700,
          }}>
          {props.title.toString()}
        </Text>
      )}
    </TouchableOpacity>
  );
};
