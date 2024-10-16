import React from 'react';
import {
  Image,
  Text,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';
import Video from 'react-native-video';
import {color, margin} from '../config.ts';
import {useMediaViewer} from './hooks/useMediaViewer.tsx';

export interface MediaViewerProps {
  style?: ViewStyle;
  contentType?: 0 | 1 | null;
  contentUrl?: string | null;
  contentWidth?: number;
  contentHeight?: number;
}

export const MediaViewer = (props: MediaViewerProps) => {
  const {memoContentUrl, getAdjustedAspectRatio} = useMediaViewer(props);

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
            backgroundColor: 'red',
          }}
          resizeMode="contain"
        />
      )}
      {props.contentType === 1 && memoContentUrl && (
        <TouchableWithoutFeedback onPress={() => {}}>
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
          />
        </TouchableWithoutFeedback>
      )}
    </View>
  );
};
