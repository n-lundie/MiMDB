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
import { updateEmail, updatePassword } from '../../store/loginSlice';
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

  // Create mutation variables useing gql query
  const [tryLogin, { data, loading, error }] = useMutation(TRY_LOGIN);

  // If tryLogin returns true, set isAuth state
  useEffect(() => {
    if (data && data.login.status) {
      console.log('valid log in');
      console.log('data', data);
      const newAuth = doAuth(data.login.token);
      dispatch(newAuth);
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
  const handleRegister = () => {};

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
      {/* Container View */}
      <View style={styles.container}>
        <View style={loginStyles.header}>
          <Text style={loginStyles.title}>
            {loading ? 'Logging in...' : 'Login'}
          </Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.formInput}
            placeholder="email"
            onChangeText={handleEmail}
            keyboardType="email-address"
            returnKeyType="next"
          />
          <TextInput
            style={styles.formInput}
            placeholder="password"
            onChangeText={handlePassword}
            keyboardType="default"
            returnKeyType="done"
            secureTextEntry={true}
          />
          <View style={loginStyles.buttonContainer}>
            <Pressable>
              <Text style={styles.buttonText}>Register</Text>
            </Pressable>
            <Pressable onPress={handleLogin}>
              <Text style={styles.buttonText}>Login</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
