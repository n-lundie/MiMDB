import React from 'react';
import { View, Text, Button } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../../store/slices/loginSlice';

import { mimdbStyles } from './mimdb.styles';

import { Login } from '../login/login';

export const Mimdb = (props) => {
  const isLoggedIn = useSelector((state) => state.login.value);
  const dispatch = useDispatch();

  return (
    <View style={mimdbStyles.container}>
      {isLoggedIn ? (
        <Button title="Logout" onPress={() => dispatch(logout())} />
      ) : (
        <Login />
      )}
    </View>
  );
};
