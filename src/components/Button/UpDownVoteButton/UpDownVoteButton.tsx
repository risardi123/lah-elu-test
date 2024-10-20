import {fontSize} from '../../config.ts';
import {Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import {styles} from './UpDownVoteButton.style.tsx';

interface UserHomeFeedProfileProps {
  onPressUp?: () => void;
  onPressDown?: () => void;
  totalUp?: string | number;
}

export const UpDownVoteButton = (props: UserHomeFeedProfileProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.upVoteButton} onPress={props.onPressUp}>
        <MaterialCommunityIcons
          name={'arrow-up-bold-outline'}
          size={fontSize['2xl']}
        />
        {props.totalUp && (
          <Text style={styles.totalUpText}>{props.totalUp}</Text>
        )}
      </TouchableOpacity>
      <View style={styles.divider} />
      <TouchableOpacity
        style={styles.downVoteButton}
        onPress={props.onPressDown}>
        <MaterialCommunityIcons
          name={'arrow-down-bold-outline'}
          size={fontSize['2xl']}
        />
      </TouchableOpacity>
    </View>
  );
};
