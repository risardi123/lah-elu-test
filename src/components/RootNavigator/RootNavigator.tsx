import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomePage} from '../../pages';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {Header} from '../Header/Header.tsx';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, StyleSheet} from 'react-native';
import {color} from '../config.ts';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();
const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomePage}
      options={{
        header: () => <Header />,
      }}
    />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();
export const RootNavigator = () => {
  const insets = useSafeAreaInsets();
  const tabItems = [
    {name: 'HomeStack', icon: 'home'},
    {name: 'Reels', icon: 'people'},
    {name: 'Add', icon: 'add-circle-outline'},
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
            component={HomeStack}
            options={{
              tabBarIcon: ({color, size}) => (
                <Icon name={item.icon} color={color} size={size} />
              ),
            }}
          />
        ))}
        <Tab.Screen
          name={'People'}
          component={HomePage}
          options={{
            tabBarIcon: ({color, size}) => (
              <Ionicons
                name={'person-circle-outline'}
                color={color}
                size={size}
              />
            ),
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
