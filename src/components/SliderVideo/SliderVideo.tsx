import {
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {useSharedValue, withTiming} from 'react-native-reanimated';
import {useSliderVideo} from './useSliderVideo/useSliderVideo.tsx';
import {color, defaultSliderVideo} from '../config.ts';
import {View} from 'react-native';
import {useEffect, useState} from 'react';

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
  const scaledX = useSharedValue(0);
  const userInteracting = useSharedValue(false);
  const [_, setLocalScaledX] = useState(0);

  // Update slider position when the video time changes, as long as the user isn't interacting
  useEffect(() => {
    if (duration > 0 && !userInteracting.value) {
      const newScaledX = (currentTime / duration) * 100;
      scaledX.value = withTiming(newScaledX, {duration: 200});
      setLocalScaledX(newScaledX);
    }
  }, [currentTime, duration, scaledX, userInteracting]);

  const {combinedGesture, onLayout, animatedStyle, animatedInnerStyle} =
    useSliderVideo({
      duration,
      onSeek,
      scaledX,
      userInteracting,
      setLocalScaledX,
    });

  return (
    <GestureHandlerRootView
      style={{
        width: '100%',
        minHeight: defaultSliderVideo,
        justifyContent: 'center',
      }}>
      <GestureDetector gesture={combinedGesture}>
        <View style={{paddingBottom: 5}}>
          <Animated.View
            style={[
              {
                flex: 1,
                backgroundColor: color.lightGrey,
              },
              animatedStyle, // Apply the animated style to the outer view
            ]}
            onLayout={onLayout}>
            <Animated.View
              style={[
                {
                  flex: 1,
                  width: `${scaledX.value}%`,
                  backgroundColor: color.blue,
                },
                animatedInnerStyle, // Apply the animated style to the inner view
              ]}
            />
          </Animated.View>
        </View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};
