import {MediaViewerProps} from '../MediaViewer/MediaViewer.tsx';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Video from 'react-native-video';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {borderRadius, color, fontSize, margin, paddingSize} from '../config.ts';
import {SliderVideo} from '../SliderVideo/SliderVideo.tsx';
import Entypo from 'react-native-vector-icons/Entypo';
import React from 'react';
import {useMediaViewer} from '../MediaViewer/hooks/useMediaViewer.tsx';
import {useMediaGlobalControl} from '../../hooks';
import {useAtomValue} from 'jotai/index';
import {disableScrollHomeAtom} from '../../pages/HomePage/hooks/useHomePage.tsx';
import {useVideoPlayer} from './hooks/useVideoPlayer.tsx';

export const VideoPlayer = (props: MediaViewerProps) => {
  const {togglePause, getPauseState, getMuteState, pause, memoContentUrl} =
    useMediaViewer(props);
  const {videoRef, onLoad, onProgress, onSeek, duration, currentTime} =
    useVideoPlayer();
  const {toggleSound} = useMediaGlobalControl();
  const disableScrollHome = useAtomValue(disableScrollHomeAtom);

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

const styles = StyleSheet.create({
  container: {
    marginTop: margin.lg,
  },
  noContentContainer: {
    backgroundColor: color.primaryBorderColor,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoStyle: {
    width: '100%',
    aspectRatio: 1,
  },
  pressableOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  soundToggleButton: {
    position: 'absolute',
    bottom: margin.xl,
    right: margin.xl,
    backgroundColor: color.primaryBorderColor,
    borderRadius: borderRadius.full,
    padding: paddingSize.md,
    zIndex: 1,
    elevation: 4,
  },
});
