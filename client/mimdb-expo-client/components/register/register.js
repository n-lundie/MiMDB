import React from 'react';
import {
  View,
  Text,
  Keyboard,
  Button,
  Pressable,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';

import { useDispatch } from 'react-redux';
import { login } from '../../store/slices/loginSlice';

import { RegisterStyles } from './register.styles';

export const Register = ({ navigation }) => {
  const handleBack = () => {
    navigation.navigate('Login');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={RegisterStyles.view}>
        <Pressable style={RegisterStyles.button} onPress={handleBack}>
          <Text style={RegisterStyles.buttonText}>Back</Text>
        </Pressable>
        <Text>Sign Up</Text>
        <TextInput
          style={RegisterStyles.input}
          placeholder="email"
          returnKeyType="done"
        />
        <TextInput
          style={RegisterStyles.input}
          placeholder="username"
          returnKeyType="done"
        />
        <TextInput
          style={RegisterStyles.input}
          placeholder="password"
          returnKeyType="done"
        />
        <TextInput
          style={RegisterStyles.input}
          placeholder="confirm password"
          returnKeyType="done"
        />
        <Button title="submit" />
      </View>
    </TouchableWithoutFeedback>
  );
};
