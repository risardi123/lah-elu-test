import {StyleSheet} from 'react-native';
import {
  borderSize,
  color,
  fontSize,
  gapSize,
  margin,
  paddingSize,
} from '../config.ts';

export const styles = StyleSheet.create({
  header: {
    backgroundColor: color.white,
    width: '100%',
    height: paddingSize.header,
    position: 'absolute',
    zIndex: 1,
  },
  topBar: {
    width: 'auto',
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: margin.xl,
    borderBottomWidth: borderSize.sm,
    borderBottomColor: color.lightGrey,
  },
  menuContainer: {
    flexDirection: 'row',
    gap: gapSize.xl,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: fontSize['2xl'],
    fontWeight: 'bold',
  },
  navBar: {
    width: 'auto',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1,
    borderBottomWidth: borderSize.sm,
    borderBottomColor: color.lightGrey,
  },
  navItem: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: '100%',
    borderBottomWidth: borderSize.md,
    borderBottomColor: 'transparent',
  },
  navItemText: {
    fontWeight: 'bold',
  },
});
