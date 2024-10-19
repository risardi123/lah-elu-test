import {
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import {useSliderVideo} from './useSliderVideo/useSliderVideo.tsx';
import {color, defaultSliderVideo} from '../config.ts';
import {View} from 'react-native';
import {SliderTime} from './SliderTime.tsx';

interface SliderVideoProps {
  duration: number;
  currentTime: number;
  onSeek: (time: number) => void;
}

export const SliderVideo = ({
  duration,
  onSeek,
  currentTime,
}: SliderVideoProps) => {
  const {
    scaledX,
    userSlideTime,
    combinedGesture,
    onLayout,
    animatedHeightStyle,
  } = useSliderVideo({
    duration,
    onSeek,
    currentTime,
  });

  return (
    <GestureHandlerRootView
      style={{
        width: '100%',
        minHeight: defaultSliderVideo,
        justifyContent: 'center',
      }}>
      <SliderTime userSlideTime={userSlideTime} duration={duration} />
      <GestureDetector gesture={combinedGesture}>
        <View style={{paddingBottom: 5}}>
          <Animated.View
            style={[
              {
                flex: 1,
                backgroundColor: color.lightGrey,
              },
              animatedHeightStyle,
            ]}
            onLayout={onLayout}>
            <Animated.View
              style={[
                {
                  flex: 1,
                  width: `${scaledX.value}%`,
                  backgroundColor: color.blue,
                },
                animatedHeightStyle,
              ]}
            />
          </Animated.View>
        </View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};
