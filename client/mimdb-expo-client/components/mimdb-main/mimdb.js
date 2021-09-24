import React from 'react';
import { View, Text, Button } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../../store/slices/loginSlice';

export const Mimdb = (props) => {
  const isLoggedIn = useSelector((state) => state.login.value);
  const dispatch = useDispatch();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {isLoggedIn ? (
        <Button title="Logout" onPress={() => dispatch(logout())} />
      ) : (
        <Button title="login" onPress={() => dispatch(login())} />
      )}
      <Text>{`${isLoggedIn}`}</Text>
    </View>
  );
};
