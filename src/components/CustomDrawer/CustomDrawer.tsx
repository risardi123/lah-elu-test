import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {PostMemeLogin} from '../PostMemeLogin/PostMemeLogin.tsx';
import {ButtonSideBar} from '../ButtonSideBar/ButtonSideBar.tsx';

export const CustomDrawerContent: React.FC<
  DrawerContentComponentProps
> = props => {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{
        flex: 1,
      }}>
      <PostMemeLogin />
      {[
        {iconName: 'home', title: 'Home'},
        {iconName: 'clock-time-three-outline', title: 'Fresh'},
        {iconName: 'trending-up', title: 'Trending'},
      ].map((item, index) => {
        return (
          <ButtonSideBar
            active={index === 0}
            iconName={item.iconName}
            title={item.title}
            key={`${index}_${item}`}
          />
        );
      })}
    </DrawerContentScrollView>
  );
};
