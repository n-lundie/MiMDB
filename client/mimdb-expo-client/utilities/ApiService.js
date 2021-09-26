'use strict';

import { gql } from '@apollo/client';

export const TRY_LOGIN = gql`
  mutation TryLogin($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      status
    }
  }
`;
