'use strict';

const { ApolloServer } = require('apollo-server-express');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { applyMiddleware } = require('graphql-middleware');
const express = require('express');
const expressJwt = require('express-jwt');

// Import GraphQL Shield permissions
const permissions = require('./authentication/permissions');

// Import GraphQL resolvers and typeDefs
const { resolvers } = require('./model/db');
const { typeDefs } = require('./model/types');
const schema = makeExecutableSchema({ typeDefs, resolvers });

const port = 4000;

// Instantiate Express http server to use a middleware
const app = express();

// Use expressJWT as middleware to handle creation and verification of tokens
app.use(
  expressJwt({
    secret: process.env.WEB_TOKEN_SECRET,
    algorithms: ['HS256'],
    credentialsRequired: false,
  })
);

// Instantiate Apollo Server and create schema with permissions applied
const server = new ApolloServer({
  schema: applyMiddleware(schema, permissions),
  context: ({ req }) => {
    const user = req.user || null;
    return { user };
  },
});

// Start server
async function start() {
  await server.start();

  server.applyMiddleware({ app });

  app.listen({ port }, () => {
    console.log(
      `Server running at http://localhost:${port}${server.graphqlPath}`
    );
  });
}
start();
