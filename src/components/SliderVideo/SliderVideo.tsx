import {
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import {useSliderVideo} from './useSliderVideo/useSliderVideo.tsx';
import {color, defaultSliderVideo} from '../config.ts';
import {View} from 'react-native';

export const SliderVideo = () => {
  const {
    scaledX,
    combinedGesture,
    onLayout,
    animatedStyle,
    animatedInnerStyle,
  } = useSliderVideo();

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
                  width: `${scaledX}%`,
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
