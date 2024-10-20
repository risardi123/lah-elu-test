import {MediaViewerProps} from '../MediaViewer.tsx';
import {Pressable, TouchableOpacity, View} from 'react-native';
import Video from 'react-native-video';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {color, fontSize} from '../../config.ts';
import {SliderVideo} from '../SliderVideo/SliderVideo.tsx';
import Entypo from 'react-native-vector-icons/Entypo';
import React, {useEffect} from 'react';
import {useMediaViewer} from '../hooks/useMediaViewer.tsx';
import {useMediaGlobalControl} from '../../../hooks';
import {useAtomValue} from 'jotai/index';
import {disableScrollHomeAtom} from '../../../pages/HomePage/hooks/useHomePage.tsx';
import {useVideoPlayer} from './hooks/useVideoPlayer.tsx';
import {useIsFocused} from '@react-navigation/native';
import {styles} from './VideoPlayer.style.tsx';

export const VideoPlayer = (props: MediaViewerProps) => {
  const isFocused = useIsFocused();
  const {togglePause, getPauseState, getMuteState, pause, memoContentUrl} =
    useMediaViewer(props);
  const {videoRef, onLoad, onProgress, onSeek, duration, currentTime} =
    useVideoPlayer();
  const {toggleSound} = useMediaGlobalControl();
  const disableScrollHome = useAtomValue(disableScrollHomeAtom);

  useEffect(() => {
    if (isFocused) {
      togglePause(); // Continue playing when screen is focused
    } else {
      togglePause(); // Pause when screen is not focused
    }
  }, [isFocused]);

  return (
    <>
      {props.contentType === 1 && memoContentUrl && (
        <>
          <View style={styles.videoContainer}>
            <Video
              ref={videoRef}
              onLoad={onLoad}
              onProgress={onProgress}
              source={{uri: memoContentUrl}}
              style={styles.videoStyle}
              resizeMode={'contain'}
              repeat={true}
              muted={getMuteState()}
              paused={!disableScrollHome || getPauseState()}
            />
            <Pressable onPress={togglePause} style={styles.pressableOverlay}>
              <MaterialCommunityIcons
                name={'play-circle'}
                size={fontSize['6xl']}
                style={{opacity: pause ? 1 : 0}}
              />
            </Pressable>
          </View>
          <SliderVideo
            duration={duration}
            onSeek={onSeek}
            currentTime={currentTime}
          />
          <TouchableOpacity
            style={styles.soundToggleButton}
            onPress={toggleSound}>
            <Entypo
              name={getMuteState() ? 'sound-mute' : 'sound'}
              size={fontSize['3xl']}
              style={{color: color.white}}
            />
          </TouchableOpacity>
        </>
      )}
    </>
  );
};
