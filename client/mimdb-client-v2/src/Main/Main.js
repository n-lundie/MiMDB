// IMPORTANT:
//  This is the main component from which all functional components should be rendered.

import React from 'react';

// React native components
import { View, Text, Button } from 'react-native';

// React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Create Stack navigation element
const Stack = createStackNavigator();
// Create Tab navigation element
const Tab = createBottomTabNavigator();

// Import state: useSelector and slice reducers
import { useSelector, useDispatch } from 'react-redux';

// Import app components
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';
import { HomeNav } from '../Home/HomeNav';

export const Main = (props) => {
  // Assign state to local variables
  const isAuth = useSelector((state) => state.auth.isAuth);
  const token = useSelector((state) => state.auth.token);

  return (
    // Wrap entire app in NavContainer to allow navigation
    <NavigationContainer>
      {/* Check if user isAuth: return Login or Home */}
      {isAuth ? (
        <Tab.Navigator
          initialRouteName="Add"
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              height: 90,
              borderTopWidth: 1,
              // borderTopColor: '#FF3535',
              backgroundColor: 'black',
              shadowColor: '#000',
              shadowOpacity: 1,
            },
          }}
        >
          <Tab.Screen name="Add" component={HomeNav} />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};
