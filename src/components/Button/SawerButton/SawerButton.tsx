import {color, fontSize} from '../../config.ts';
import {Text, TouchableOpacity, View} from 'react-native';
import FoundationIcons from 'react-native-vector-icons/Foundation';
import React from 'react';
import {styles} from './SawerButton.style.tsx';

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
