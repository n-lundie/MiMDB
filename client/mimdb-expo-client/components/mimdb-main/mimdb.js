// IMPORTANT:
//  This component exists to allow access to the redux store provided by the PROVIDER in App.js!
//  It now also functions as the root navigation component!

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';

// Import selector to get access to state
import { useSelector } from 'react-redux';

// Import components to display
import { Login } from '../login/login';
import { Register } from '../register/register';

// Create Stack Nav element
const Stack = createStackNavigator();

export const Mimdb = (props) => {
  // Assign desired state to local variable
  const isAuthenticated = useSelector(
    (state) => state.authentication.isAuthenticated
  );

  return (
    // Wrap entire app in NavContainer to allow use of NavComponents
    <NavigationContainer>
      {/* Check if user is authenticated */}
      {!isAuthenticated ? (
        // if NOT auth, show login nav
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShown: false, gestureResponseDistance: 200 }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      ) : (
        // if AUTHENTICATED, show app
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text>Logged IN</Text>
        </View>
      )}
    </NavigationContainer>
  );
};
