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
      <View style={RegisterStyles.container}>
        <Pressable style={RegisterStyles.back} onPress={handleBack}>
          <Text>Back</Text>
        </Pressable>
        <View style={RegisterStyles.formContainer}>
          <Text>Sign Up</Text>
          <TextInput
            style={RegisterStyles.input}
            placeholder="email"
            returnKeyType="done"
            keyboardType="email-address"
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
            secureTextEntry={true}
          />
          <TextInput
            style={RegisterStyles.input}
            placeholder="confirm password"
            returnKeyType="done"
            secureTextEntry={true}
          />
          <View style={RegisterStyles.submitContainer}>
            <Pressable style={RegisterStyles.button}>
              <Text style={RegisterStyles.submitFont}>Submit</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
