import {useHeaderDirection} from '../../hooks';
import React, {useCallback, useEffect, useRef} from 'react';
import {Animated, Text, TouchableOpacity, View} from 'react-native';
import {color, fontSize, paddingSize} from '../config.ts';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {styles} from './Header.style.tsx';

interface HeaderProps {
  disabled?: boolean;
}
export const Header = (props: HeaderProps) => {
  const navigation = useNavigation();
  const {direction} = useHeaderDirection();

  const openDrawer = useCallback(() => {
    navigation.dispatch(DrawerActions.openDrawer);
  }, []);

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
      style={[
        styles.header,
        {
          transform: [{translateY: props.disabled ? 0 : headerHeight}],
        },
      ]}>
      <View style={styles.topBar}>
        <View style={styles.menuContainer}>
          <MaterialCommunityIcons
            name={'menu'}
            size={fontSize['2xl']}
            onPress={openDrawer}
          />
          <Text style={styles.headerTitle}>LAHELU</Text>
        </View>
        <MaterialCommunityIcons name={'magnify'} size={fontSize['2xl']} />
      </View>
      <View style={styles.navBar}>
        {['Home', 'Fresh', 'Trending'].map(item => (
          <TouchableOpacity
            key={item}
            style={[
              styles.navItem,
              item === 'Home' && {borderBottomColor: color.blue},
            ]}>
            <Text style={styles.navItemText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </Animated.View>
  );
};
