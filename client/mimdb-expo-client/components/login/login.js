// Import React - REQUIRED AS STANDARD
import React from 'react';
// Import react-native components as needed
import {
  View,
  Text,
  Keyboard,
  TextInput,
  TouchableWithoutFeedback,
  Pressable,
} from 'react-native';

// Import Selector, Dispatch and actions from slices to interact with state
import { useDispatch, useSelector } from 'react-redux';
import { updateEmail, updatePassword } from '../../store/slices/loginSlice';

// Import styles
import { LoginStyles } from './login.styles';

// Destructure "navigation" prop to allow use of nav functions
export const Login = ({ navigation }) => {
  // Assign desired state to local variables
  const email = useSelector((state) => state.login.email);
  const password = useSelector((state) => state.login.password);

  // Invoke useDispatch to allow use of actions
  const dispatch = useDispatch();

  // Create handlers for user actions:

  // Handle change of email input, first arg is value of TextInput
  const handleEmail = (text) => {
    // Invoke action whose arg is the payload
    const newState = updateEmail(text);

    // Invoke dispatch to modify state
    dispatch(newState);
  };

  // Handle change of password input
  const handlePassword = (text) => {
    const newState = updatePassword(text);
    dispatch(newState);
  };

  // Handle "Login" button press
  const handleLogin = () => {};

  // Handle "Register" button press
  const handleRegister = () => {
    // Invoke navigation.navigate, arg is name of screen to navigate to
    navigation.navigate('Register');
  };

  return (
    // Wrap in "Touchable..." to close keyboard on press
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      {/* Contaier View Element */}
      <View style={LoginStyles.view}>
        <Text>Login</Text>
        {/* Email input field */}
        <TextInput
          onChangeText={handleEmail}
          style={LoginStyles.input}
          placeholder="email"
          returnKeyType="done"
        />
        {/* show email state - vvvREMOVE THISvvv */}
        <Text>{email.toString()}</Text>
        {/* Password input field */}
        <TextInput
          onChangeText={handlePassword}
          style={LoginStyles.input}
          placeholder="password"
          returnKeyType="done"
        />
        {/* show password state - vvvREMOVE THISvvv */}
        <Text>{password.toString()}</Text>
        {/* Button container */}
        <View style={LoginStyles.buttonContainer}>
          {/* Register button */}
          <Pressable onPress={handleRegister}>
            <Text style={LoginStyles.buttonFont}>Register</Text>
          </Pressable>
          {/* Login button */}
          <Pressable onPress={handleLogin}>
            <Text style={LoginStyles.buttonFont}>Login</Text>
          </Pressable>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
