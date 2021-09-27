// Import generated Prisma client to interact with db
const { PrismaClient } = require('@prisma/client');
// Import jwt to allow token creation
const jwt = require('jsonwebtoken');

// Regex pattern for email input validation
const { emailPattern } = require('../validation/inputValidation');

// Instantiate Prisma client
const prisma = new PrismaClient();

// Define resolvers for GraphQL model
const resolvers = {
  Query: {
    // Get all users
    users: async () => {
      const allUsers = await prisma.user.findMany();
      return allUsers;
    },
    // Get user by id
    user: async (_, { uid }) => {
      const user = await prisma.user.findUnique({
        where: {
          uid,
        },
      });
      return user;
    },
    // restricted view REMOVE THIS
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
    // Login to existing account
    login: async (parent, { email, password }) => {
      console.log('login');
      // Check input is a valid email
      const emailValidation = email.match(emailPattern);

      if (emailValidation && emailValidation[0] === email) {
        console.log('valid');

        // Find account with given email
        const user = await prisma.user.findUnique({
          where: {
            email,
          },
        });
        console.log(user);

        // If user exists and password is valid
        if (user && user.password === password) {
          const token = jwt.sign(
            { sub: user.uid },
            process.env.WEB_TOKEN_SECRET,
            {
              expiresIn: '15s',
            }
          );

          return { status: true, token };
        }
      }
      console.log('invalid login');
      return { status: false };
    },

    // Register new account and authorise
    register: async (parent, { email, name, password, confirm }) => {
      console.log(email, name, password, confirm);
      // Check input is valid email
      const emailValidation = email.match(emailPattern);

      // Check password match
      const passwordCheck = password === confirm;

      // Check if email already in use
      const emailCheck = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (
        emailValidation &&
        emailValidation[0] === email &&
        passwordCheck &&
        !emailCheck
      ) {
        console.log('valid register');
        const newUser = await prisma.user.create({
          data: {
            email,
            name,
            password,
          },
        });

        const token = jwt.sign(
          { sub: newUser.uid },
          process.env.WEB_TOKEN_SECRET,
          {
            expiresIn: '15s',
          }
        );

        return { status: true, token };
      } else {
        console.log('invalid register');
        return { status: false };
      }
    },
  },
};

module.exports = { resolvers };
