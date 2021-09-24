import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button } from 'react-native';

import { useSelector } from 'react-redux';

import { Login } from '../login/login';
import { Register } from '../register/register';

const Stack = createStackNavigator();

export const Mimdb = (props) => {
  const isLoggedIn = useSelector((state) => state.login.value);

  return (
    <NavigationContainer>
      {!isLoggedIn ? (
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShown: false, gestureResponseDistance: 200 }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      ) : (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text>Logged IN</Text>
        </View>
      )}
    </NavigationContainer>
  );
};
