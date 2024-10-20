import {StyleSheet} from 'react-native';
import {
  borderRadius,
  borderSize,
  color,
  fontSize,
  gapSize,
  margin,
  paddingSize,
} from '../../config.ts';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: paddingSize.lg,
    borderWidth: borderSize.sm,
    flexDirection: 'row',
    borderColor: color.primaryBorderColor,
    borderRadius: borderRadius.lg,
  },
  upVoteButton: {
    flexDirection: 'row',
    gap: gapSize.sm,
    paddingVertical: paddingSize.md,
  },
  totalUpText: {
    fontSize: fontSize.lg,
    fontWeight: 'bold',
  },
  divider: {
    backgroundColor: color.primaryBorderColor,
    height: '100%',
    width: 1,
    marginHorizontal: margin.lg,
  },
  downVoteButton: {
    paddingVertical: paddingSize.md,
  },
});
