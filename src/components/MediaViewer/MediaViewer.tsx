import React from 'react';
import {Text, View, StyleSheet, ViewStyle} from 'react-native';
import {color, margin} from '../config.ts';
import {useMediaViewer} from './hooks/useMediaViewer.tsx';
import {BaseImage} from '../BaseImage/BaseImage.tsx';
import {VideoPlayer} from '../VideoPlayer/VideoPlayer.tsx';

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
  const {memoContentUrl, getAdjustedAspectRatio} = useMediaViewer(props);

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
      <VideoPlayer {...props} />
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
});
