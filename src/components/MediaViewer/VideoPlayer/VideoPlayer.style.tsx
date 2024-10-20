import {StyleSheet} from 'react-native';
import {borderRadius, color, margin, paddingSize} from '../../config.ts';

export const styles = StyleSheet.create({
  container: {
    marginTop: margin.lg,
  },
  noContentContainer: {
    backgroundColor: color.primaryBorderColor,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoStyle: {
    width: '100%',
    aspectRatio: 1,
  },
  pressableOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  soundToggleButton: {
    position: 'absolute',
    bottom: margin.xl,
    right: margin.xl,
    backgroundColor: color.primaryBorderColor,
    borderRadius: borderRadius.full,
    padding: paddingSize.md,
    zIndex: 1,
    elevation: 4,
  },
});
