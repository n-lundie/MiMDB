// REQUIRED
import React from 'react';

// Import react native components
import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
} from 'react-native';

// Import state: useSelector and/or slice actions
import { useSelector, useDispatch } from 'react-redux';
import { updateEmail, updatePassword } from '../../store/loginSlice';
import { doAuth, setToken } from '../../store/authSlice';

// Import Apollo client and gql queries: useMutation and/or useQuery, TRY_LOGIN
import { useMutation } from '@apollo/client';
import { TRY_LOGIN } from '../../model/loginModel';

// Import styles
// <-- Import styles here

// Destructure "navigation" to allow use of nav functions
export const Login = ({ navigation }) => {
  // Assign state to local variables
  const loginForm = useSelector((state) => state.login);
  const dispatch = useDispatch();

  // Create mutation variables useing gql query
  const [tryLogin, { data, loading, error }] = useMutation(TRY_LOGIN);

  /* HANDLER FUNCTIONS */
  // Handle change of email input
  const handleEmail = (text) => {
    const newEmailState = updateEmail(text);
    dispatch(newEmailState);
  };

  // Handle change of password input
  const handlePassword = (text) => {
    const newPasswordState = updatePassword(text);
    dispatch(newPasswordState);
  };

  // Handle Register Press
  const handleRegister = () => {};

  // Handle Login Press
  const handleLogin = () => {
    // Call tryLogin and pass email/password state as variables
    tryLogin({
      variables: { email: loginForm.email, password: loginForm.password },
    });
  };

  // If tryLogin returns true, set isAuth state
  if (data && data.login.state) {
    dispatch(setToken(data.login.token));
    dispatch(doAuth());
  }

  return (
    // Wrap in "Touchable.." to close keyboard on press
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      {/* Container View */}
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View>
          <Text>{loading ? 'Logging in...' : 'Login'}</Text>
        </View>
        <View>
          <TextInput
            placeholder="email"
            onChangeText={handleEmail}
            keyboardType="email-address"
            returnKeyType="next"
          />
          <TextInput
            placeholder="password"
            onChangeText={handlePassword}
            keyboardType="default"
            returnKeyType="done"
          />
        </View>
        <View>
          <Pressable>
            <Text>Register</Text>
          </Pressable>
          <Pressable>
            <Text>Login</Text>
          </Pressable>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
