import {StyleSheet} from 'react-native';
import {
  borderRadius,
  borderSize,
  fontSize,
  gapSize,
  paddingSize,
} from '../config.ts';

export const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    borderWidth: borderSize.sm,
    paddingHorizontal: paddingSize.md,
    borderRadius: borderRadius.full,
    gap: gapSize.md,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: fontSize.md,
  },
});
