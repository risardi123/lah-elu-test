import {StyleSheet} from 'react-native';
import {
  borderRadius,
  borderSize,
  color,
  fontSize,
  gapSize,
  paddingSize,
} from '../../config.ts';

export const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: paddingSize.md,
    paddingHorizontal: paddingSize.lg,
    borderWidth: borderSize.sm,
    flexDirection: 'row',
    borderColor: color.primaryBorderColor,
    borderRadius: borderRadius.lg,
    gap: gapSize.sm,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: fontSize.lg,
    fontWeight: 'bold',
  },
});
