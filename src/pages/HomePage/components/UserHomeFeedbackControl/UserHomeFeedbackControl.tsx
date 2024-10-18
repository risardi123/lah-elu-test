import {gapSize, paddingSize} from '../../../../components/config.ts';
import {View, StyleSheet} from 'react-native';
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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: paddingSize.xl,
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: gapSize.md,
  },
});
