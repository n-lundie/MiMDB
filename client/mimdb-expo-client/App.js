import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Provider } from 'react-redux';
import store from './store/store';

import { Mimdb } from './components/mimdb-main/mimdb';
import { Login } from './components/login/login';
import { Register } from './components/register/register';

const Stack = createStackNavigator();

export default function App() {
  return (
    // Wrap whole app in Provider to give access to store
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShown: false, gestureResponseDistance: 200 }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
