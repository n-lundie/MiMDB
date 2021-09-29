// IMPORTANT:
//  This is the main component from which all functional components should be rendered.

import React from 'react';

// React native components
import { View, Text, Button } from 'react-native';

// React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIoniconIcons from 'react-native-vector-icons/Ionicons';
import MaterialFontAwesomeIcons from 'react-native-vector-icons/FontAwesome';

// Create Stack navigation element
const Stack = createStackNavigator();
// Create Tab navigation element
const Tab = createMaterialBottomTabNavigator();

// Import state: useSelector and slice reducers
import { useSelector, useDispatch } from 'react-redux';

// Import app components
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';
import { HomeNav } from '../Home/HomeNav';
import { Profile } from '../Profile/Profile';
import { Settings } from '../Settings/Settings';

export const Main = (props) => {
  // Assign state to local variables
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    // Wrap entire app in NavContainer to allow navigation
    <NavigationContainer>
      {/* Check if user isAuth: return Login or Home */}
      {isAuth ? (
        <Tab.Navigator
          activeColor="#FF3535"
          initialRouteName="Add"
          labeled={false}
          barStyle={{
            backgroundColor: '#151515',
            height: 85,
            borderTopWidth: 1,
            borderTopColor: '#000',
            shadowColor: '#000',
            shadowOpacity: 1,
          }}
          style={
            {
              // shadowColor: '#000',
              // shadowOpacity: 1,
            }
          }
          screenOptions={{
            headerShown: false,
          }}
        >
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialFontAwesomeIcons name="user" color={color} size={25} />
              ),
            }}
          />
          <Tab.Screen
            name="Add"
            component={HomeNav}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="movie-open"
                  color={color}
                  size={25}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Settings"
            component={Settings}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialIoniconIcons name="settings" color={color} size={25} />
              ),
            }}
          />
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
