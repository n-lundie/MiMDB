const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    uid: Int!
    name: String!
    email: String!
    password: String!
  }

  type RegRes {
    status: Boolean!
    token: String
  }

  type LoginRes {
    status: Boolean!
    token: String
  }

  type Query {
    users: [User]
    user(uid: Int!): User
    viewer: User!
  }

  type Mutation {
    login(email: String!, password: String!): LoginRes!
    register(
      email: String!
      name: String!
      password: String!
      confirm: String!
    ): RegRes!
  }
`;

module.exports = { typeDefs };
