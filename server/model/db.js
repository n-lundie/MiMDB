const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');

const prisma = new PrismaClient();

const resolvers = {
  Query: {
    users: async () => {
      const allUsers = await prisma.user.findMany();
      return allUsers;
    },
    user: async (_, { uid }) => {
      const user = await prisma.user.findUnique({
        where: {
          uid,
        },
      });
      return user;
    },
    viewer: async (parent, args, { user }) => {
      console.log(user);
      const authUser = await prisma.user.findUnique({
        where: {
          uid: parseInt(user.sub),
        },
      });
      return authUser;
    },
  },

  Mutation: {
    async login(parent, { email, password }) {
      const user = await prisma.user.findFirst({
        where: {
          email,
          password,
        },
      });
      if (user) {
        return jwt.sign(
          { 'http://localhost:4000/graphql': { uid: user.uid } },
          'this_is_a_secret',
          { algorithm: 'HS256', subject: `${user.uid}`, expiresIn: '1h' }
        );
      } else {
        return 'invalid login details';
      }
    },
  },
};

module.exports = { resolvers };
