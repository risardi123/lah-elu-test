import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomePage} from '../../page/HomePage/HomePage.tsx';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';

const Tab = createBottomTabNavigator();
export const BottomNavigator = () => {
  const tabItems = [
    {name: 'Home', icon: 'home'},
    {name: 'Reels', icon: 'people'},
    {name: 'Add', icon: 'add-circle-outline'},
  ];

  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      {tabItems.map(item => (
        <Tab.Screen
          key={item.name}
          name={item.name}
          component={HomePage}
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
  );
};
