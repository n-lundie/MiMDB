import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from './Home';
import { Survey } from '../Survey/Survey';

const HomeStack = createStackNavigator();

export const HomeNav = (props) => {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Survey" component={Survey} />
    </HomeStack.Navigator>
  );
};
