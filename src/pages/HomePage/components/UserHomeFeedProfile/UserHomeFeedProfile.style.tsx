import {StyleSheet} from 'react-native';
import {
  borderRadius,
  color,
  fontSize,
  gapSize,
  paddingSize,
} from '../../../../components/config.ts';

export const styles = StyleSheet.create({
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
