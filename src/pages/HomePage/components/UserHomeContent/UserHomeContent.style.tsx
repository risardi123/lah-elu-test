import {StyleSheet} from 'react-native';
import {
  color,
  fontSize,
  margin,
  paddingSize,
} from '../../../../components/config.ts';

export const styles = StyleSheet.create({
  container: {
    marginBottom: margin.sm,
    paddingVertical: paddingSize.xl,
    backgroundColor: color.primaryBackgroundColor,
  },
  title: {
    fontSize: fontSize.lg,
    fontWeight: 'bold',
    paddingHorizontal: paddingSize.xl,
    marginTop: margin.md,
  },
});
