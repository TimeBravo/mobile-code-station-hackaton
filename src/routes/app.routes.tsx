import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { Dashboard } from '../screens/Dashboard';
import { OrderDetail } from '../screens/OrderDetail';
import { Gallery } from '../screens/Gallery';

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes(){
  return(
    <Navigator headerMode="none" initialRouteName="Dashboard">
      <Screen 
        name="Dashboard"
        component={Dashboard}
      />
      <Screen 
        name="OrderDetail"
        component={OrderDetail}
      />
      <Screen 
        name="Gallery"
        component={Gallery}
      />
    </Navigator>
  )
}