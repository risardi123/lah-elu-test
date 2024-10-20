import {useCallback, useEffect, useState} from 'react';
import {Gesture} from 'react-native-gesture-handler';
import {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {LayoutChangeEvent} from 'react-native';
import {defaultMaxSliderVideo, defaultSliderVideo} from '../../../config.ts';
import {useSetAtom} from 'jotai';
import {disableScrollHomeAtom} from '../../../../pages/HomePage/hooks/useHomePage.tsx';

type UseSliderVideoProps = {
  duration: number;
  onSeek: (time: number) => void;
  currentTime: number;
};

export const useSliderVideo = ({
  duration,
  onSeek,
  currentTime,
}: UseSliderVideoProps) => {
  const onHold = useSharedValue(false);
  const [onHoldState, setOnHoldState] = useState(false);
  const [maxOffset, setMaxOffset] = useState<number>(0);
  const setDisableScrollHome = useSetAtom(disableScrollHomeAtom);

  const scaledX = useSharedValue(0);
  const userInteracting = useSharedValue(false);
  const [localScaledX, setLocalScaledX] = useState(0);
  const [userSlideTime, setUserSlideTime] = useState(0);

  // Update scaledX based on currentTime, while not interacting
  useEffect(() => {
    if (duration > 0 && !userInteracting.value) {
      const newScaledX = (currentTime / duration) * 100;
      scaledX.value = withTiming(newScaledX, {duration: 200});
      setLocalScaledX(newScaledX); // Keep local state in sync for UI updates
    }
  }, [currentTime, duration, scaledX, userInteracting]);

  const calculateScaledXValues = (eventX: number): number => {
    'worklet';
    return Math.min(100, Math.max(0, (eventX / maxOffset) * 100));
  };

  const seekTime = (scaledXValue: number) => {
    'worklet';
    const calculateSeekTime = (scaledXValue / 100) * duration;
    runOnJS(setUserSlideTime)(calculateSeekTime);
    return calculateSeekTime;
  };

  // Unified gesture handler to update scaledX and trigger onSeek
  const handleGestureUpdate = (eventX: number) => {
    'worklet';
    const scaledXValue = calculateScaledXValues(eventX);
    scaledX.value = scaledXValue;
    runOnJS(setLocalScaledX)(scaledXValue); // Update React state for UI updates
    runOnJS(onSeek)(seekTime(scaledXValue));
  };

  const gesturePan = Gesture.Pan()
    .onUpdate(event => handleGestureUpdate(event.x))
    .onTouchesDown(() => {
      userInteracting.value = true;
      onHold.value = true;
      runOnJS(setOnHoldState)(true);
    })
    .onTouchesUp(() => {
      userInteracting.value = false;
      onHold.value = false;
      runOnJS(setOnHoldState)(false);
    });

  const gestureTap = Gesture.Tap().onEnd(event => handleGestureUpdate(event.x));

  const combinedGesture = Gesture.Simultaneous(gesturePan, gestureTap);

  const onLayout = useCallback((event: LayoutChangeEvent) => {
    setMaxOffset(event.nativeEvent.layout.width);
  }, []);

  const animatedHeightStyle = useAnimatedStyle(() => ({
    minHeight: withTiming(
      onHold.value ? defaultMaxSliderVideo : defaultSliderVideo,
      {
        duration: 200,
      },
    ),
  }));

  useEffect(() => {
    setDisableScrollHome(!onHoldState);
  }, [onHoldState, setDisableScrollHome]);

  return {
    scaledX,
    combinedGesture,
    onLayout,
    animatedHeightStyle,
    localScaledX,
    userSlideTime,
  };
};
