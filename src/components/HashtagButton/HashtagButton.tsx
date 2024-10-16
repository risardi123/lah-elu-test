import {
  borderRadius,
  borderSize,
  color,
  fontSize,
  gapSize,
  paddingSize,
} from '../config.ts';
import {Text, TouchableOpacity, ViewStyle} from 'react-native';
import React from 'react';

interface HashtagButtonProps {
  style?: ViewStyle;
  onPress?: () => void;
  title?: string;
}

export const HashtagButton = (props: HashtagButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        backgroundColor: color.primaryBackgroundColor,
        borderWidth: borderSize.sm,
        paddingHorizontal: paddingSize.md,
        borderRadius: borderRadius.full,
        borderColor: color.primaryBorderColor,
        gap: gapSize.md,
        ...props.style,
      }}
      onPress={props.onPress}>
      <Text>#</Text>
      {props.title && (
        <Text style={{fontWeight: 'bold', fontSize: fontSize.md}}>
          {props.title}
        </Text>
      )}
    </TouchableOpacity>
  );
};
