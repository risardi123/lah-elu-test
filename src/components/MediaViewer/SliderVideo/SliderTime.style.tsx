import {StyleSheet} from 'react-native';
import {color, fontSize} from '../../config.ts';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    top: -40,
  },
  timeText: {
    fontWeight: 'bold',
    fontSize: fontSize['3xl'],
    color: color.white,
    textShadowColor: '#000',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1,
  },
});
