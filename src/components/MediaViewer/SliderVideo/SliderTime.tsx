import {Text, View} from 'react-native';
import {useAtomValue} from 'jotai/index';
import {disableScrollHomeAtom} from '../../../pages/HomePage/hooks/useHomePage.tsx';
import {styles} from './SliderTime.style.tsx';

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
