import {
  borderRadius,
  borderSize,
  color,
  fontSize,
  gapSize,
  margin,
  paddingSize,
} from '../config.ts';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';

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

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: paddingSize.lg,
    borderWidth: borderSize.sm,
    flexDirection: 'row',
    borderColor: color.primaryBorderColor,
    borderRadius: borderRadius.lg,
  },
  upVoteButton: {
    flexDirection: 'row',
    gap: gapSize.sm,
    paddingVertical: paddingSize.md,
  },
  totalUpText: {
    fontSize: fontSize.lg,
    fontWeight: 'bold',
  },
  divider: {
    backgroundColor: color.primaryBorderColor,
    height: '100%',
    width: 1,
    marginHorizontal: margin.lg,
  },
  downVoteButton: {
    paddingVertical: paddingSize.md,
  },
});
