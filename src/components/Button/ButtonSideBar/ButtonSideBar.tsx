import {color, fontSize, paddingSize} from '../../config.ts';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
interface ButtonSideBarProps {
  iconName?: string;
  title?: string;
  active?: boolean;
}
export const ButtonSideBar = (props: ButtonSideBarProps) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        padding: paddingSize.xl,
        backgroundColor: props.active ? color.blue : color.white,
        gap: paddingSize.md,
        alignItems: 'center',
      }}>
      <MaterialCommunityIcons
        name={props.iconName ?? ''}
        size={fontSize['3xl']}
        color={props.active ? color.white : color.black}
      />
      <Text
        style={{
          fontSize: fontSize.lg,
          fontWeight: 'bold',
          color: props.active ? color.white : color.black,
        }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};
