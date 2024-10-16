import {
  borderRadius,
  color,
  fontSize,
  gapSize,
  paddingSize,
} from '../config.ts';
import {Text, TouchableOpacity, View} from 'react-native';
import FoundationIcons from 'react-native-vector-icons/Foundation';
import React from 'react';
interface SawerButtonProps {
  onPress?: () => void;
}
export const SawerButton = (props: SawerButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        backgroundColor: color.sawer,
        paddingHorizontal: paddingSize.md,
        borderRadius: borderRadius.full,
        gap: gapSize.sm,
        alignItems: 'center',
      }}
      onPress={props.onPress}>
      <View
        style={{
          backgroundColor: color.white,
          paddingHorizontal: paddingSize.sm,
          borderRadius: borderRadius.full,
        }}>
        <FoundationIcons
          size={fontSize.md}
          name={'dollar'}
          color={color.sawer}
        />
      </View>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: fontSize.md,
          color: color.white,
        }}>
        Sawer
      </Text>
    </TouchableOpacity>
  );
};
