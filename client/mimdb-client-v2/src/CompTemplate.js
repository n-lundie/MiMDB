// REQUIRED
import React, { useEffect } from 'react';

// Import react native components
import { View, Text } from 'react-native';

// Import state: useSelector and/or slice actions
import { useSelector, useDispatch } from 'react-redux';
// <-- Import slice actions here

// Import Apollo client and gql queries: useMutation and/or useQuery, TRY_LOGIN
import { useMutation } from '@apollo/client';
// <-- Import gql queries here

// Import styles
import { styles } from '../../styles/styles';

// Destructure "navigation" to allow use of nav functions
export const Login = ({ navigation }) => {
  // Assign state to local variables

  // Create mutation variables using gql query
  // const [tryLogin, { data, loading, error }] = useMutation();

  // IMPORTANT: handle query/mutation responses inside useEffect

  // Handle any query data
  // useEffect(() => {}, []);

  /* HANDLER FUNCTIONS */

  return (
    // --- Wrap in any needed wrap components (e.g. TouchableWithoutFeedback) ---
    // Container
    <View>{/* COMPONENT */}</View>
  );
};
