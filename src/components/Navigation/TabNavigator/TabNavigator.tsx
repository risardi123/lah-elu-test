import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomePage} from '../../../pages';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {Header} from '../../Header/Header.tsx';
import {View, StyleSheet, Text} from 'react-native';
import {color, paddingSize} from '../../config.ts';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {atom} from 'jotai';
export const BlankScreen = () => {
  return (
    <>
      <Header disabled={true} />
      <Text style={{paddingTop: paddingSize.header}}>Home Blank</Text>
    </>
  );
};

const Tab = createBottomTabNavigator();
export const TabNavigator = () => {
  const insets = useSafeAreaInsets();
  const tabItems = [
    {name: 'HomeStack', icon: 'home', screen: HomePage},
    {name: 'Reels', icon: 'people', screen: BlankScreen},
    {name: 'Add', icon: 'add-circle-outline', screen: BlankScreen},
  ];

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}>
      <Tab.Navigator
        screenOptions={{headerShown: false, tabBarShowLabel: false}}>
        {tabItems.map(item => (
          <Tab.Screen
            key={item.name}
            name={item.name}
            component={item.screen}
            options={{
              tabBarIcon: ({color, size}) => (
                <Icon name={item.icon} color={color} size={size} />
              ),
              headerShown: false, // Show the header for this tab
            }}
          />
        ))}
        <Tab.Screen
          name={'People'}
          component={BlankScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Ionicons
                name={'person-circle-outline'}
                color={color}
                size={size}
              />
            ),
            header: () => <Header />,
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.secondaryBackgroundColor,
    flex: 1,
  },
});
