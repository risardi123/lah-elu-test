import {Image, Text, View} from 'react-native';
import {
  borderRadius,
  color,
  fontSize,
  gapSize,
  paddingSize,
} from '../../../../components/config.ts';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React, {useCallback, useMemo} from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/id'; // Import Indonesian locale

// Extend dayjs with the relativeTime plugin
dayjs.extend(relativeTime);
dayjs.locale('id'); // Set locale to Indonesian

interface UserHomeFeedProfileProps {
  avatarUrl?: string;
  username?: string;
  lastUpdated?: number;
}
export const UserHomeFeedProfile = (props: UserHomeFeedProfileProps) => {
  const getTime = useMemo(() => {
    if (!props.lastUpdated) {
      return '';
    }
    return dayjs(props.lastUpdated).fromNow();
  }, [props.lastUpdated]);
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
          <Text>{getTime}</Text>
        </Text>
      </View>
      <MaterialCommunityIcons name={'dots-horizontal'} size={fontSize.sm} />
    </View>
  );
};
