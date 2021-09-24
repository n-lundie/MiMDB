import React from 'react';
import {
  View,
  Text,
  Keyboard,
  Button,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';

import { useDispatch } from 'react-redux';
import { login } from '../../store/slices/loginSlice';

import { LoginStyles } from './login.styles';

export const Login = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login());
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={LoginStyles.view}>
        <Text>Login</Text>
        <TextInput
          style={LoginStyles.input}
          placeholder="username"
          returnKeyType="done"
        />
        <TextInput
          style={LoginStyles.input}
          placeholder="password"
          returnKeyType="done"
        />
        <Button title="Login" onPress={handleLogin} />
        <Button title="Register" onPress={handleRegister} />
      </View>
    </TouchableWithoutFeedback>
  );
};
