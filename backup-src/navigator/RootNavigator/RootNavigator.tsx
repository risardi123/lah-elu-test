import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {BottomNavigator} from '../BottomNavigator/BottomNavigator.tsx';
const Drawer = createDrawerNavigator();
export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{drawerType: 'front'}}>
        <Drawer.Screen name="Home" component={BottomNavigator} />
        <Drawer.Screen name="Fresh" component={BottomNavigator} />
        <Drawer.Screen name="Trending" component={BottomNavigator} />
        <Drawer.Screen name="Topik" component={BottomNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
