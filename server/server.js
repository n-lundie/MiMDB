'use strict';

const { ApolloServer, gql } = require('apollo-server');

const { resolvers } = require('./model/db');

const { typeDefs } = require('./model/types');

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server running at ${url}`);
});
