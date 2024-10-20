import {View} from 'react-native';
import React from 'react';
import {SecondaryButton, UpDownVoteButton} from '../../../../components';
import {styles} from './UserHomeFeedbackControl.style.tsx';

interface UserHomeFeedbackControlProps {
  titleUp?: string;
  titleComment?: string;
}

export const UserHomeFeedbackControl = (
  props: UserHomeFeedbackControlProps,
) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonGroup}>
        <UpDownVoteButton totalUp={props.titleUp} />
        <SecondaryButton
          sideIcon={true}
          sideIconName={'message-text-outline'}
          title={props.titleComment}
        />
      </View>
      <SecondaryButton sideIcon={true} sideIconName={'share-outline'} />
    </View>
  );
};
