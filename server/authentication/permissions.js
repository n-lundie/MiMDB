const { and, or, rule, shield } = require('graphql-shield');

const checkPermission = (user, permission) => {
  if (user && user['http://localhost:4000/graphql']) {
    return user['http://localhost:4000/graphql'].permissions.includes(
      permission
    );
  }
  return false;
};

const isAuthenticated = rule()((parent, args, { user }) => {
  return user !== null;
});

module.exports = shield({
  Query: {
    viewer: isAuthenticated,
  },
});
