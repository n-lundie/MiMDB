'use strict';

// Import gql
import { gql } from '@apollo/client';

export const TRY_REGISTER = gql`
  mutation TryRegister(
    $email: String!
    $name: String!
    $password: String!
    $confirm: String!
  ) {
    register(
      email: $email
      name: $name
      password: $password
      confirm: $confirm
    ) {
      status
      token
    }
  }
`;
