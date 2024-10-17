import {useHeaderDirection} from '../../hooks';
import React, {useEffect, useRef} from 'react';
import {Animated, Text, TouchableOpacity, View} from 'react-native';
import {
  borderSize,
  color,
  fontSize,
  gapSize,
  margin,
  paddingSize,
} from '../config.ts';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const Header = () => {
  const {direction} = useHeaderDirection();

  const headerHeight = useRef(new Animated.Value(paddingSize.header)).current;
  useEffect(() => {
    Animated.timing(headerHeight, {
      toValue: direction === 'down' ? -paddingSize.header : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [direction]);

  return (
    <Animated.View
      style={{
        backgroundColor: color.white,
        width: '100%',
        height: paddingSize.header, // Animated height
        position: 'absolute',
        zIndex: 1,
        transform: [{translateY: headerHeight}],
      }}>
      <View
        style={{
          width: 'auto',
          height: 50,
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: margin.xl,
          borderBottomWidth: borderSize.sm,
          borderBottomColor: color.lightGrey,
        }}>
        <View
          style={{
            flexDirection: 'row',
            gap: gapSize.xl,
            alignItems: 'center',
          }}>
          <MaterialCommunityIcons name={'menu'} size={fontSize['4xl']} />
          <Text style={{fontSize: fontSize['2xl'], fontWeight: 'bold'}}>
            LAHELU
          </Text>
        </View>
        <MaterialCommunityIcons name={'magnify'} size={fontSize['4xl']} />
      </View>
      <View
        style={{
          width: 'auto',
          justifyContent: 'space-between',
          flexDirection: 'row',
          flex: 1,
          borderBottomWidth: borderSize.sm,
          borderBottomColor: color.lightGrey,
        }}>
        {['Home', 'Fresh', 'Trending'].map(item => {
          return (
            <TouchableOpacity
              style={{
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
                height: '100%',
                borderBottomWidth: borderSize.md,
                borderBottomColor: item === 'Home' ? color.blue : 'transparent',
              }}>
              <Text style={{fontWeight: 'bold'}}>{item}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </Animated.View>
  );
};
