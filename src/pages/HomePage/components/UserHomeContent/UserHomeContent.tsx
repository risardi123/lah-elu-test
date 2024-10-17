import {
  color,
  fontSize,
  margin,
  paddingSize,
} from '../../../../components/config.ts';
import {UserHomeFeedProfile} from '../UserHomeFeedProfile/UserHomeFeedProfile.tsx';
import {ScrollView, Text, View} from 'react-native';
import {HashtagButton, MediaViewer} from '../../../../components';
import {SawerButton} from '../../../../components/SawerButton/SawerButton.tsx';
import {UserHomeFeedbackControl} from '../UserHomeFeedbackControl/UserHomeFeedbackControl.tsx';
import React from 'react';
import {MediaViewerProps} from '../../../../components/MediaViewer/MediaViewer.tsx';
interface UserHomeContentProps {
  avatarUrl?: string;
  username?: string;
  lastUpdate?: string;
  title?: string;
  contentUrl?: string;
  contentType?: MediaViewerProps['contentType'];
  contentWidth?: number;
  contentHeight?: number;
  paused?: boolean;
  muted?: boolean;
  titleUp?: string;
  titleComment?: string;
}
export const UserHomeContent = (props: UserHomeContentProps) => {
  return (
    <View
      style={{
        marginBottom: margin.sm,
        paddingVertical: paddingSize.xl,
        backgroundColor: color.primaryBackgroundColor,
      }}>
      <UserHomeFeedProfile
        avatarUrl={props.avatarUrl}
        username={props.username}
        lastUpdated={props.lastUpdate}
      />
      <Text
        style={{
          fontSize: fontSize.lg,
          fontWeight: 'bold',
          paddingHorizontal: paddingSize.xl,
          marginTop: margin.md,
        }}>
        {props.title}
      </Text>

      <MediaViewer
        contentUrl={props.contentUrl}
        contentType={props.contentType}
        contentWidth={props.contentWidth}
        contentHeight={props.contentHeight}
        paused={props.paused}
        muted={props.muted}
      />

      <ScrollView
        style={{
          paddingHorizontal: paddingSize.xl,
          paddingVertical: paddingSize.lg,
        }}
        horizontal>
        <SawerButton />
        <HashtagButton title={'wtf'} style={{marginLeft: margin.md}} />
      </ScrollView>

      <UserHomeFeedbackControl
        titleUp={props.titleUp}
        titleComment={props.titleComment}
      />
    </View>
  );
};
