import {gapSize, paddingSize} from '../../../../components/config.ts';
import {View} from 'react-native';
import React from 'react';
import {SecondaryButton, UpDownVoteButton} from '../../../../components';

export const UserHomeFeedbackControl = () => {
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
        <UpDownVoteButton totalUp={'0'} />
        <SecondaryButton
          sideIcon={true}
          sideIconName={'message-text-outline'}
          title={'0'}
        />
      </View>
      <SecondaryButton sideIcon={true} sideIconName={'share-outline'} />
    </View>
  );
};
