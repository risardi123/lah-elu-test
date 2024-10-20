import {StyleSheet} from 'react-native';
import {gapSize, paddingSize} from '../../../../components/config.ts';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: paddingSize.xl,
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: gapSize.md,
  },
});
