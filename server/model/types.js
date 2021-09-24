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
  }
`;

module.exports = { typeDefs };
