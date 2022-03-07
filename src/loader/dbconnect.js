const bcrypt = require('bcrypt');
// Connect to DB
// eslint-disable-next-line no-unused-vars
const app = require('../app');

const users = [];

function registerUser(user) {
  users.push({
    id: Math.random(),
    email: user.email,
    password: bcrypt.hashSync(user.password, 10),
    role: user.role,
  });
}

function getUserByEmail(email) {
  return users.find((c) => c.email === email);
}

function loginUser(email, password) {
  const user = getUserByEmail(email);
  if (user && bcrypt.compareSync(password, user.password)) {
    return user;
  }
  return null;
}

function jwtCallback(jwtPayload, done) {
  const user = getUserByEmail(jwtPayload.email);
  if (user) {
    return done(null, user);
  }
  return done(null, false);
}

module.exports = {
  users,
  registerUser,
  loginUser,
  jwtCallback,
};
