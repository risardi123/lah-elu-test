import {
  borderRadius,
  borderSize,
  color,
  fontSize,
  gapSize,
  margin,
  paddingSize,
} from '../config.ts';
import {Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
interface UserHomeFeedProfileProps {
  onPressUp?: () => void;
  onPressDown?: () => void;
  totalUp?: string | number;
}
export const UpDownVoteButton = (props: UserHomeFeedProfileProps) => {
  return (
    <View
      style={{
        paddingHorizontal: paddingSize.lg,
        borderWidth: borderSize.sm,
        flexDirection: 'row',
        borderColor: color.primaryBorderColor,
        borderRadius: borderRadius.lg,
      }}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          gap: gapSize.sm,
          paddingVertical: paddingSize.md,
        }}
        onPress={props.onPressUp}>
        <MaterialCommunityIcons
          name={'arrow-up-bold-outline'}
          size={fontSize['2xl']}
        />
        {props.totalUp && (
          <Text
            style={{
              fontSize: fontSize.lg,
              fontWeight: 'bold',
            }}>
            {props.totalUp}
          </Text>
        )}
      </TouchableOpacity>
      <View
        style={{
          backgroundColor: color.primaryBorderColor,
          height: '100%',
          width: 1,
          marginHorizontal: margin.lg,
        }}
      />
      <TouchableOpacity
        style={{
          paddingVertical: paddingSize.md,
        }}
        onPress={props.onPressDown}>
        <MaterialCommunityIcons
          name={'arrow-down-bold-outline'}
          size={fontSize['2xl']}
        />
      </TouchableOpacity>
    </View>
  );
};
