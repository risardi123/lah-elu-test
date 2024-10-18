import {useCallback, useEffect, useState} from 'react';
import {Gesture} from 'react-native-gesture-handler';
import {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {LayoutChangeEvent} from 'react-native';
import {defaultMaxSliderVideo, defaultSliderVideo} from '../../config.ts';
import {useSetAtom} from 'jotai';
import {disableScrollHomeAtom} from '../../../pages/HomePage/hooks/useHomePage.tsx';

export const useSliderVideo = () => {
  const onHold = useSharedValue(false);
  const [onHoldState, setOnHoldState] = useState(false);
  const [maxOffset, setMaxOffset] = useState<number>(0);
  const [scaledX, setScaledX] = useState<number>(0);
  const setDisableScrollHome = useSetAtom(disableScrollHomeAtom);

  const biggerAnimation = useAnimatedStyle(() => ({
    height: 30,
  }));

  const normalAnimation = useAnimatedStyle(() => ({
    height: 20,
  }));
  // Reusable function to calculate eventX and scaledX
  const calculateScaledXValues = (eventX: number): number => {
    'worklet';
    return Math.floor((eventX / maxOffset) * 100);
  };

  const gesturePan = Gesture.Pan()
    .onChange(event => {
      const eventX = Math.floor(event.x);
      runOnJS(setScaledX)(calculateScaledXValues(eventX));
    })
    .onTouchesDown(() => {
      onHold.value = true; // Update shared value to true when pressed
      runOnJS(setOnHoldState)(true);
    })
    .onTouchesUp(() => {
      onHold.value = false; // Update shared value to false when released
      runOnJS(setOnHoldState)(false);
    });

  const gestureTap = Gesture.Tap().onEnd(event => {
    const eventX = Math.floor(event.x);
    runOnJS(setScaledX)(calculateScaledXValues(eventX));
  });

  const combinedGesture = Gesture.Simultaneous(gesturePan, gestureTap);

  const onLayout = useCallback((event: LayoutChangeEvent) => {
    // this function is to get the maximum width of slider
    const {width} = event.nativeEvent.layout;
    setMaxOffset(width);
  }, []);

  // Define animated style for the slider height
  const animatedStyle = useAnimatedStyle(() => {
    return {
      minHeight: withTiming(
        onHold.value ? defaultMaxSliderVideo : defaultSliderVideo,
        {duration: 200},
      ), // Smooth transition between 40 and 20
    };
  });

  const animatedInnerStyle = useAnimatedStyle(() => {
    return {
      minHeight: withTiming(
        onHold.value ? defaultMaxSliderVideo : defaultSliderVideo,
        {duration: 200},
      ), // Smooth transition for inner view height
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
    biggerAnimation,
    normalAnimation,
    animatedStyle,
    animatedInnerStyle,
  };
};
