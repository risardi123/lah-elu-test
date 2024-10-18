import React from 'react';
import {
  Pressable,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import Video from 'react-native-video';
import {
  borderRadius,
  color,
  defaultMaxSliderVideo,
  fontSize,
  margin,
  paddingSize,
} from '../config.ts';
import {useMediaViewer} from './hooks/useMediaViewer.tsx';
import Entypo from 'react-native-vector-icons/Entypo';
import {useMediaGlobalControl} from '../../hooks';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {BaseImage} from '../BaseImage/BaseImage.tsx';
import {SliderVideo} from '../SliderVideo/SliderVideo.tsx';

export interface MediaViewerProps {
  style?: ViewStyle;
  contentType?: number;
  contentUrl?: string | null;
  contentWidth?: number;
  contentHeight?: number;
  muted?: boolean;
  paused?: boolean;
}

export const MediaViewer = (props: MediaViewerProps) => {
  const {
    memoContentUrl,
    getAdjustedAspectRatio,
    togglePause,
    getPauseState,
    getMuteState,
    pause,
  } = useMediaViewer(props);

  const {toggleSound} = useMediaGlobalControl();

  return (
    <View style={[styles.container, {marginTop: margin.lg}]}>
      {!memoContentUrl && (
        <View style={styles.noContentContainer}>
          <Text>No content to show</Text>
        </View>
      )}
      {props.contentType === 0 && memoContentUrl && (
        <BaseImage
          source={{uri: memoContentUrl}}
          style={{aspectRatio: getAdjustedAspectRatio}}
          resizeMode="contain"
        />
      )}
      {props.contentType === 1 && memoContentUrl && (
        <>
          <View style={styles.videoContainer}>
            <Video
              source={{uri: memoContentUrl}}
              style={styles.videoStyle}
              resizeMode={'contain'}
              repeat={true}
              muted={getMuteState()}
              paused={getPauseState()}
            />
            <Pressable onPress={togglePause} style={styles.pressableOverlay}>
              <MaterialCommunityIcons
                name={'play-circle'}
                size={fontSize['6xl']}
                style={{opacity: pause ? 1 : 0}}
              />
            </Pressable>
          </View>
          <SliderVideo />
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
    </View>
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
