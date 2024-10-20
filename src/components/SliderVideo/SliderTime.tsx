import {Text, View, StyleSheet} from 'react-native';
import {color, fontSize} from '../config.ts';
import {useAtomValue} from 'jotai/index';
import {disableScrollHomeAtom} from '../../pages/HomePage/hooks/useHomePage.tsx';

interface SliderTimeProps {
  userSlideTime: number;
  duration: number;
}

export const SliderTime = (props: SliderTimeProps) => {
  const disableScrollHome = useAtomValue(disableScrollHomeAtom);

  return (
    <>
      {!disableScrollHome && (
        <View style={styles.container}>
          <Text style={styles.timeText}>
            {Math.floor(props.userSlideTime).toString().padStart(2, '0')}:
            {Math.floor(props.duration).toString().padStart(2, '0')}
          </Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
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
