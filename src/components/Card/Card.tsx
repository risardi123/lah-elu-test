import React from 'react';
import {View, StyleSheet, ViewStyle, StyleProp} from 'react-native';

interface CardProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  borderWidth?: number;
  borderRadius?: number;
  borderColor?: string;
  padding?: number;
  margin?: number;
  backgroundColor?: string;
  elevation?: number; // For Android shadow effect
}

const Card: React.FC<CardProps> = ({
  children,
  style,
  borderWidth = 1,
  borderRadius = 10,
  borderColor = '#ddd',
  padding = 10,
  margin = 10,
  backgroundColor = '#fff',
}) => {
  return (
    <View
      style={[
        styles.card,
        {
          borderWidth,
          borderRadius,
          borderColor,
          padding,
          margin,
          backgroundColor,
        },
        style,
      ]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {},
});

export default Card;
