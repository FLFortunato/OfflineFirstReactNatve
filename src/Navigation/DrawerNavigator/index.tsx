import React from 'react';
import { SideBarContent } from '../../Components/SignedIn/SideBarContent';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Stacks } from '../routes';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName={'Main'}
      backBehavior={'initialRoute'}
      drawerContent={(props) => <SideBarContent props={props} />}>
      <Drawer.Screen name={'Main'} component={Stacks} />
    </Drawer.Navigator>
  );
};
