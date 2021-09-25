'use strict';

const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const expressJwt = require('express-jwt');

const { resolvers } = require('./model/db');
const { typeDefs } = require('./model/types');

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
  typeDefs,
  resolvers,
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
