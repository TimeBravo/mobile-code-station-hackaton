import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { SignIn } from '../screens/SignIn';
import { Dashboard } from '../screens/Dashboard';

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes(){
  return(
    <Navigator headerMode="none" initialRouteName="SignIn">
      <Screen 
        name="SignIn"
        component={Dashboard}
      />
    </Navigator>
  )
}