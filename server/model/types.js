const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    uid: Int!
    name: String!
    email: String!
    password: String!
  }

  type Query {
    users: [User]
    user(uid: Int!): User
    viewer: User!
  }

  type Mutation {
    login(email: String!, password: String!): String
  }
`;

module.exports = { typeDefs };
