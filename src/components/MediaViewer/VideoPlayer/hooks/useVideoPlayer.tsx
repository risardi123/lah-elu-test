import {useCallback, useRef, useState} from 'react';
import {VideoRef} from 'react-native-video';
type UseVideoPlayerOutput = {
  videoRef: React.RefObject<VideoRef>;
  duration: number;
  currentTime: number;
  onLoad: (data: {duration: number}) => void;
  onProgress: (data: {currentTime: number}) => void;
  onSeek: (time: number) => void;
};
export const useVideoPlayer = (): UseVideoPlayerOutput => {
  const videoRef = useRef<VideoRef>(null);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const onLoad = useCallback((data: {duration: number}) => {
    setDuration(data.duration);
  }, []);

  const onProgress = useCallback((data: {currentTime: number}) => {
    setCurrentTime(data.currentTime); // Update the current time of the video
  }, []);

  const onSeek = (time: number) => {
    if (videoRef.current) {
      videoRef.current.seek(time);
    }
  };

  return {
    videoRef,
    duration,
    currentTime,
    onLoad,
    onProgress,
    onSeek,
  };
};
