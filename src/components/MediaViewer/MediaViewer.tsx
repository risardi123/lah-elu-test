import React from 'react';
import {
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';
import Video from 'react-native-video';
import {borderRadius, color, fontSize, margin, paddingSize} from '../config.ts';
import {useMediaViewer} from './hooks/useMediaViewer.tsx';
import Entypo from 'react-native-vector-icons/Entypo';
import {useMediaGlobalControl} from '../../hooks';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
    <View style={{marginTop: margin.lg}}>
      {!memoContentUrl && (
        <View
          style={{
            backgroundColor: color.primaryBorderColor,
            aspectRatio: 1,
          }}>
          <Text>No content to show</Text>
        </View>
      )}
      {props.contentType === 0 && memoContentUrl && (
        <Image
          src={memoContentUrl}
          style={{
            aspectRatio: getAdjustedAspectRatio,
          }}
          resizeMode="contain"
        />
      )}
      {props.contentType === 1 && memoContentUrl && (
        <>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <>
              <Video
                source={{
                  uri: memoContentUrl,
                }}
                style={{
                  width: '100%',
                  aspectRatio: getAdjustedAspectRatio,
                }}
                resizeMode={'contain'}
                repeat={true}
                muted={getMuteState()}
                paused={getPauseState()}
              />
              <Pressable
                onPress={togglePause}
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  aspectRatio: getAdjustedAspectRatio,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  elevation: 3,
                }}>
                <MaterialCommunityIcons
                  name={'play-circle'}
                  size={fontSize['6xl']}
                  style={{opacity: pause ? 1 : 0}}
                />
              </Pressable>
            </>
          </View>
          <TouchableOpacity
            style={{
              position: 'absolute',
              bottom: margin.xl,
              right: margin.xl,
              backgroundColor: color.primaryBorderColor,
              borderRadius: borderRadius.full,
              padding: paddingSize.md,
              zIndex: 1,
              elevation: 5,
            }}
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
