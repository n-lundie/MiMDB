// REQUIRED
import React, { useEffect } from 'react';

// Import react native components
import {
  View,
  Text,
  TextInput,
  Keyboard,
  Pressable,
  TouchableWithoutFeedback,
} from 'react-native';

// Import state: useSelector and/or slice actions
import { useSelector, useDispatch } from 'react-redux';
import {
  updateEmail,
  updateName,
  updatePassword,
  updateConfirm,
  valid,
  invalid,
} from '../../store/registerSlice';
import { doAuth } from '../../store/authSlice';

// Import Apollo client and gql queries: useMutation, TRY_REGISTER
import { useMutation } from '@apollo/client';
import { TRY_REGISTER } from '../../model/registerModel';

// Import styles
import { styles } from '../../styles/styles';
import { loginStyles } from '../../styles/loginStyles';

// Destructure "navigation" to allow use of nav functions
export const Register = ({ navigation }) => {
  // Assign state to local variables
  const regForm = useSelector((state) => state.register);
  const dispatch = useDispatch();

  // Create mutation variables using gql queries
  const [tryRegister, { data, loading, error }] = useMutation(TRY_REGISTER); // <-- use gql query as arg

  // Handle query/mutation responses with useEffect
  useEffect(() => {
    // If register succeed, reset state, set auth
    if (data && data.register.status) {
      // Clear state
      const clearEmail = updateEmail('');
      dispatch(clearEmail);
      const clearName = updateName('');
      dispatch(clearName);
      const clearPassword = updatePassword('');
      dispatch(clearPassword);
      const clearConfirm = updateConfirm('');
      dispatch(clearConfirm);
      dispatch(valid());

      // Set isAuth
      const newAuth = doAuth(data.register.token);
      dispatch(newAuth);
    }
    // If register fail, set invalid details
    if (data && !data.register.status) {
      console.log('data', data);
      dispatch(invalid());
    }
  }, [data]);

  /* HANDLER FUNCTIONS */
  // Handle change of name input
  const handleName = (text) => {
    const newNameState = updateName(text);
    dispatch(newNameState);
  };

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

  // Handle change of password input
  const handleConfirm = (text) => {
    const newConfirmState = updateConfirm(text);
    dispatch(newConfirmState);
  };

  // Handle Submit press
  const handleSubmit = () => {
    // Call tryRegister and pass regForm state as variables
    console.log(regForm);
    tryRegister({
      variables: {
        email: regForm.email,
        name: regForm.name,
        password: regForm.password,
        confirm: regForm.confirm,
      },
    });
  };

  return (
    // Wrap in "Touchable.." to close keyboard on press
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      {/* COMP CONTAINER */}
      <View style={[styles.container, { backgroundColor: '#151515' }]}>
        {/* HEADER */}
        <View
          style={[loginStyles.header, { width: 275, alignItems: 'flex-start' }]}
        >
          <Text style={loginStyles.title}>
            {loading ? 'Submitting...' : 'SIGN UP'}
          </Text>
          <Text style={{ color: '#FFF' }}>
            {regForm.valid ? '' : 'invalid details'}
          </Text>
        </View>
        {/* FORM CONTAINER */}
        <View style={styles.formContainer}>
          <TextInput
            style={styles.formInput}
            placeholder="name"
            placeholderTextColor="hsla(255, 100%, 100%, 0.5)"
            onChangeText={handleName}
            keyboardType="default"
            returnKeyType="next"
          />
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
          <TextInput
            style={styles.formInput}
            placeholder="confirm password"
            placeholderTextColor="hsla(255, 100%, 100%, 0.5)"
            onChangeText={handleConfirm}
            keyboardType="default"
            returnKeyType="done"
            secureTextEntry={true}
          />
          {/* BUTTON CONTAINER */}
          <View
            style={[
              loginStyles.buttonContainer,
              { flexDirection: 'row-reverse' },
            ]}
          >
            <Pressable style={styles.buttonRed} onPress={handleSubmit}>
              <Text style={styles.buttonTextRed}>Submit</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
