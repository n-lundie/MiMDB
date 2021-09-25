'use strict';

const { ApolloServer } = require('apollo-server-express');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { applyMiddleware } = require('graphql-middleware');
const express = require('express');
const expressJwt = require('express-jwt');

const permissions = require('./authentication/permissions');

const { resolvers } = require('./model/db');
const { typeDefs } = require('./model/types');
const schema = makeExecutableSchema({ typeDefs, resolvers });

const port = 4000;
const app = express();

app.use(
  expressJwt({
    secret: 'this_is_a_secret',
    algorithms: ['HS256'],
    credentialsRequired: false,
  })
);

const server = new ApolloServer({
  schema: applyMiddleware(schema, permissions),
  context: ({ req }) => {
    const user = req.user || null;
    return { user };
  },
});

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
