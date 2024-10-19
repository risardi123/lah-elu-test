import {useCallback, useEffect, useState} from 'react';
import {Gesture} from 'react-native-gesture-handler';
import {
  runOnJS,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import {LayoutChangeEvent} from 'react-native';
import {defaultMaxSliderVideo, defaultSliderVideo} from '../../config.ts';
import {useSetAtom} from 'jotai';
import {disableScrollHomeAtom} from '../../../pages/HomePage/hooks/useHomePage.tsx';

type UseSliderVideoProps = {
  duration: number; // Video duration
  onSeek: (time: number) => void; // Seek callback function
  scaledX: SharedValue;
  userInteracting: SharedValue<boolean>;
  setLocalScaledX: (value: number) => void;
};

export const useSliderVideo = ({
  duration,
  onSeek,
  scaledX,
  userInteracting,
  setLocalScaledX,
}: UseSliderVideoProps) => {
  const onHold = useSharedValue(false);
  const [onHoldState, setOnHoldState] = useState(false);
  const [maxOffset, setMaxOffset] = useState<number>(0);
  const setDisableScrollHome = useSetAtom(disableScrollHomeAtom);

  const calculateScaledXValues = (eventX: number): number => {
    'worklet';
    return Math.min(100, Math.max(0, Math.floor((eventX / maxOffset) * 100)));
  };

  const seekTime = (scaledXValue: number) => {
    'worklet';
    return (scaledXValue / 100) * duration;
  };

  const gesturePan = Gesture.Pan()
    .onUpdate(event => {
      const eventX = Math.floor(event.x);
      const scaledXValue = calculateScaledXValues(eventX);
      scaledX.value = scaledXValue;
      runOnJS(setLocalScaledX)(scaledXValue);
      runOnJS(onSeek)(seekTime(scaledXValue));
    })
    .onTouchesDown(() => {
      userInteracting.value = true;
      onHold.value = true;
      runOnJS(setOnHoldState)(true);
    })
    .onTouchesUp(() => {
      userInteracting.value = false;
      onHold.value = false;
      runOnJS(setOnHoldState)(false);
    })
    .onEnd(() => {
      // Set userInteracting to false when user stops interacting
      userInteracting.value = false;
      onHold.value = false;
      runOnJS(setOnHoldState)(false);
    });

  const gestureTap = Gesture.Tap().onEnd(event => {
    const eventX = Math.floor(event.x);
    const scaledXValue = calculateScaledXValues(eventX);
    scaledX.value = scaledXValue;
    runOnJS(setLocalScaledX)(scaledXValue);
    runOnJS(onSeek)(seekTime(scaledXValue));
  });

  const combinedGesture = Gesture.Simultaneous(gesturePan, gestureTap);

  const onLayout = useCallback((event: LayoutChangeEvent) => {
    const {width} = event.nativeEvent.layout;
    setMaxOffset(width);
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      minHeight: withTiming(
        onHold.value ? defaultMaxSliderVideo : defaultSliderVideo,
        {duration: 200},
      ),
    };
  });

  const animatedInnerStyle = useAnimatedStyle(() => {
    return {
      minHeight: withTiming(
        onHold.value ? defaultMaxSliderVideo : defaultSliderVideo,
        {duration: 200},
      ),
    };
  });

  useEffect(() => {
    setDisableScrollHome(!onHoldState);
  }, [onHoldState]);

  return {
    scaledX,
    combinedGesture,
    onLayout,
    onHold,
    onHoldState,
    animatedStyle,
    animatedInnerStyle,
  };
};
