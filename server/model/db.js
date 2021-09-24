const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const resolvers = {
  Query: {
    users: async () => {
      const allUsers = await prisma.user.findMany();
      return allUsers;
    },
  },
};

module.exports = { resolvers };
