import {
  borderRadius,
  color,
  fontSize,
  gapSize,
  paddingSize,
} from '../config.ts';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import FoundationIcons from 'react-native-vector-icons/Foundation';
import React from 'react';

interface SawerButtonProps {
  onPress?: () => void;
}

export const SawerButton = (props: SawerButtonProps) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={props.onPress}>
      <View style={styles.iconContainer}>
        <FoundationIcons
          size={fontSize.md}
          name={'dollar'}
          color={color.sawer}
        />
      </View>
      <Text style={styles.buttonText}>Sawer</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    backgroundColor: color.sawer,
    paddingHorizontal: paddingSize.md,
    borderRadius: borderRadius.full,
    gap: gapSize.sm,
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: color.white,
    paddingHorizontal: paddingSize.sm,
    borderRadius: borderRadius.full,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: fontSize.md,
    color: color.white,
  },
});
