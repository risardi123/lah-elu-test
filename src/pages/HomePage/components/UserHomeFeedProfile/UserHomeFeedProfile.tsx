import {Text, View, StyleSheet} from 'react-native';
import {
  borderRadius,
  color,
  fontSize,
  gapSize,
  paddingSize,
} from '../../../../components/config.ts';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React, {useMemo} from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/id';
import {BaseImage} from '../../../../components';

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

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: paddingSize.xl,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: gapSize.md,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: borderRadius.full,
    backgroundColor: color.black,
  },
  usernameText: {
    fontSize: fontSize.sm,
  },
  username: {
    fontWeight: 'bold',
  },
});
