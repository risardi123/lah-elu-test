import {gapSize, paddingSize} from '../../../../components/config.ts';
import {View} from 'react-native';
import React from 'react';
import {SecondaryButton, UpDownVoteButton} from '../../../../components';
interface UserHomeFeedbackControlProps {
  titleUp?: string;
  titleComment?: string;
}
export const UserHomeFeedbackControl = (
  props: UserHomeFeedbackControlProps,
) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: paddingSize.xl,
      }}>
      <View
        style={{
          flexDirection: 'row',
          gap: gapSize.md,
        }}>
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
