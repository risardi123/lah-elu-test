import {Text, View} from 'react-native';
import {fontSize} from '../../../../components/config.ts';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React, {useMemo} from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/id';
import {BaseImage} from '../../../../components';
import {styles} from './UserHomeFeedProfile.style.tsx';

dayjs.extend(relativeTime);
dayjs.locale('id');

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
    <View style={styles.container}>
      <View style={styles.profileInfo}>
        <BaseImage
          source={{
            uri: props.avatarUrl,
          }}
          style={styles.avatar}
        />
        <Text style={styles.usernameText}>
          <Text style={styles.username}>{props.username ?? ''}</Text>
          <Text> • </Text>
          <Text>{getTime}</Text>
        </Text>
      </View>
      <MaterialCommunityIcons name={'dots-horizontal'} size={fontSize.sm} />
    </View>
  );
};
