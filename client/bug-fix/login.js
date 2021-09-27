import React, { useEffect } from 'react';

import { View, Text, Button } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { updateEmail, updatePassword } from './store/loginSlice';
import { doAuth, unAuth } from './store/authSlice';

import { gql, useMutation, useQuery } from '@apollo/client';

const TRY_LOGIN = gql`
  mutation TryLogin($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      status
      token
    }
  }
`;

const GET_USERS = gql`
  query GetUsers {
    users {
      uid
    }
  }
`;

export const Login = (props) => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const email = useSelector((state) => state.login.email);
  const password = useSelector((state) => state.login.password);

  // const { loading, error, data } = useQuery(GET_USERS);

  const [tryLogin, { data, loading, error }] = useMutation(TRY_LOGIN);

  const handlePress = () => {
    tryLogin({ variables: { email: 'noah@test.com', password: 'pass' } });
  };

  if (error) console.log('error', error);

  // useEffect(() => {
  //   console.log('data', data);
  // }, []);

  console.log(data);

  return (
    <View style={styles}>
      {data ? <Text>{data.login.token}</Text> : <Text>Logged Out</Text>}
      <Button onPress={handlePress} title="Login">
        Login
      </Button>
    </View>
  );
};

const styles = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
};
