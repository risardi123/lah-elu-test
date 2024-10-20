import {UserHomeFeedProfile} from '../UserHomeFeedProfile/UserHomeFeedProfile.tsx';
import {Text, View} from 'react-native';
import {MediaViewer} from '../../../../components';
import {UserHomeFeedbackControl} from '../UserHomeFeedbackControl/UserHomeFeedbackControl.tsx';
import React from 'react';
import {MediaViewerProps} from '../../../../components/MediaViewer/MediaViewer.tsx';
import HashtagList from '../HashtagList/HashtagList.tsx';
import {styles} from './UserHomeContent.style.tsx';

interface UserHomeContentProps {
  avatarUrl?: string;
  username?: string;
  lastUpdate?: number;
  title?: string;
  contentUrl?: string;
  contentType?: MediaViewerProps['contentType'];
  contentWidth?: number;
  contentHeight?: number;
  paused?: boolean;
  muted?: boolean;
  titleUp?: string;
  titleComment?: string;
  hashtag?: Array<string>;
}

export const UserHomeContent = (props: UserHomeContentProps) => {
  return (
    <View style={styles.container}>
      <UserHomeFeedProfile
        avatarUrl={props.avatarUrl}
        username={props.username}
        lastUpdated={props.lastUpdate}
      />
      <Text style={styles.title}>{props.title}</Text>

      <MediaViewer
        contentUrl={props.contentUrl}
        contentType={props.contentType}
        contentWidth={props.contentWidth}
        contentHeight={props.contentHeight}
        paused={props.paused}
        muted={props.muted}
      />
      <HashtagList hashtag={props.hashtag} />
      <UserHomeFeedbackControl
        titleUp={props.titleUp}
        titleComment={props.titleComment}
      />
    </View>
  );
};
