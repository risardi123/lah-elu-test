import {useHeaderDirection} from '../../hooks';
import React, {useCallback, useEffect, useRef} from 'react';
import {Animated, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {
  borderSize,
  color,
  fontSize,
  gapSize,
  margin,
  paddingSize,
} from '../config.ts';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {DrawerActions, useNavigation} from '@react-navigation/native';
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

const styles = StyleSheet.create({
  header: {
    backgroundColor: color.white,
    width: '100%',
    height: paddingSize.header,
    position: 'absolute',
    zIndex: 1,
  },
  topBar: {
    width: 'auto',
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: margin.xl,
    borderBottomWidth: borderSize.sm,
    borderBottomColor: color.lightGrey,
  },
  menuContainer: {
    flexDirection: 'row',
    gap: gapSize.xl,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: fontSize['2xl'],
    fontWeight: 'bold',
  },
  navBar: {
    width: 'auto',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1,
    borderBottomWidth: borderSize.sm,
    borderBottomColor: color.lightGrey,
  },
  navItem: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: '100%',
    borderBottomWidth: borderSize.md,
    borderBottomColor: 'transparent',
  },
  navItemText: {
    fontWeight: 'bold',
  },
});
