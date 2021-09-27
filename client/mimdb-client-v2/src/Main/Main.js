// IMPORTANT:
//  This is the main component from which all functional components should be rendered.

import React from 'react';

// React native components
import { View, Text } from 'react-native';

// React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Create Stack navigation element
const Stack = createStackNavigator();

// Import state: useSelector and slice reducers
import { useSelector } from 'react-redux';

// Import app components
import { Login } from '../Login/Login';

export const Main = (props) => {
  // Assign state to local variables
  const isAuth = useSelector((state) => state.auth.isAuth);
  const token = useSelector((state) => state.auth.token);

  return (
    // Wrap entire app in NavContainer to allow navigation
    <NavigationContainer>
      {/* Check if user isAuth: return Login or Home */}
      {isAuth ? (
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          <Text>{token}</Text>
        </View>
      ) : (
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};
