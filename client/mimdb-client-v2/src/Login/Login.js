// REQUIRED
import React, { useEffect } from 'react';

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
import {
  updateEmail,
  updatePassword,
  valid,
  invalid,
} from '../../store/loginSlice';
import { doAuth } from '../../store/authSlice';

// Import Apollo client and gql queries: useMutation and/or useQuery, TRY_LOGIN
import { useMutation } from '@apollo/client';
import { TRY_LOGIN } from '../../model/loginModel';

// Import styles
import { styles } from '../../styles/styles';
import { loginStyles } from '../../styles/loginStyles';

// Destructure "navigation" to allow use of nav functions
export const Login = ({ navigation }) => {
  // Assign state to local variables
  const loginForm = useSelector((state) => state.login);
  const dispatch = useDispatch();

  // Create mutation variables using gql query
  const [tryLogin, { data, loading, error }] = useMutation(TRY_LOGIN);

  // IMPORTANT: handle query/mutation responses inside useEffect

  // If tryLogin returns true, set isAuth state
  useEffect(() => {
    // If login succeed, reset state, set auth
    if (data && data.login.status) {
      // Clear state
      const clearEmail = updateEmail('');
      dispatch(clearEmail);
      const clearPassword = updatePassword('');
      dispatch(clearPassword);
      dispatch(valid());

      // Set isAuth
      const newAuth = doAuth(data.login.token);
      dispatch(newAuth);
    }
    // If login fail, set invalid login
    if (data && !data.login.status) {
      dispatch(invalid());
    }
  }, [data]);

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
  const handleRegister = () => {
    navigation.navigate('Register');
  };

  // Handle Login Press
  const handleLogin = () => {
    // Call tryLogin and pass email/password state as variables
    tryLogin({
      variables: { email: loginForm.email, password: loginForm.password },
    });
  };

  return (
    // Wrap in "Touchable.." to close keyboard on press
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      {/* COMP CONTAINER */}
      <View style={styles.container}>
        {/* HEADER */}
        <View style={loginStyles.header}>
          <Text style={loginStyles.title}>
            {loading ? 'Logging in...' : 'Login'}
          </Text>
          <Text>{loginForm.valid ? '' : 'invalid login'}</Text>
        </View>
        {/* FORM CONTAINER */}
        <View style={styles.formContainer}>
          <TextInput
            style={styles.formInput}
            placeholder="email"
            placeholderTextColor="hsla(255, 100%, 100%, 0.5)"
            onChangeText={handleEmail}
            keyboardType="email-address"
            returnKeyType="next"
          />
          <TextInput
            style={styles.formInput}
            placeholder="password"
            placeholderTextColor="hsla(255, 100%, 100%, 0.5)"
            onChangeText={handlePassword}
            keyboardType="default"
            returnKeyType="done"
            secureTextEntry={true}
          />
          {/* BUTTON CONTAINER */}
          <View style={loginStyles.buttonContainer}>
            <Pressable style={styles.buttonGrey} onPress={handleRegister}>
              <Text style={styles.buttonTextRed}>Register</Text>
            </Pressable>
            <Pressable style={styles.buttonRed} onPress={handleLogin}>
              <Text style={styles.buttonTextRed}>Login</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
