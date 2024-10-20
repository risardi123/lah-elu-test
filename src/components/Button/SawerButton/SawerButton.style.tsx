import {StyleSheet} from 'react-native';
import {
  borderRadius,
  color,
  fontSize,
  gapSize,
  paddingSize,
} from '../../config.ts';

export const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    backgroundColor: color.sawer,
    paddingHorizontal: paddingSize.md,
    borderRadius: borderRadius.full,
    gap: gapSize.sm,
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: color.white,
    paddingHorizontal: paddingSize.sm,
    borderRadius: borderRadius.full,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: fontSize.md,
    color: color.white,
  },
});
