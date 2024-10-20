import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {CustomDrawerContent} from '../CustomDrawer/CustomDrawer.tsx';
import {TabNavigator} from '../TabNavigator/TabNavigator.tsx';
const Drawer = createDrawerNavigator();
export const RootNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        component={TabNavigator} // Your Tab Navigator
        options={{headerShown: false}} // Hide the default header
      />
    </Drawer.Navigator>
  );
};
