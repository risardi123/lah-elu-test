import {Image, Text, View} from 'react-native';
import {
  borderRadius,
  color,
  fontSize,
  gapSize,
  paddingSize,
} from '../../../../components/config.ts';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
interface UserHomeFeedProfileProps {
  avatarUrl?: string;
  username?: string;
  lastUpdated?: string;
}
export const UserHomeFeedProfile = (props: UserHomeFeedProfileProps) => {
  return (
    <View
      style={{
        paddingHorizontal: paddingSize.xl,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: gapSize.md,
        }}>
        <Image
          src={props.avatarUrl ?? ''}
          style={{
            width: 30,
            height: 30,
            borderRadius: borderRadius.full,
            backgroundColor: color.black,
          }}
        />
        <Text style={{fontSize: fontSize.sm}}>
          <Text style={{fontWeight: 'bold'}}>{props.username ?? ''}</Text>
          <Text> • </Text>
          <Text>{props.lastUpdated ?? ''}</Text>
        </Text>
      </View>
      <MaterialCommunityIcons name={'dots-horizontal'} size={fontSize.sm} />
    </View>
  );
};
