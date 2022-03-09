const bcrypt = require('bcrypt');
const { users } = require('../../loader/dbconnect');
// const HttpError = require('../../tools/httpError');

function getUserByEmail(email) {
  return users.find((c) => c.email === email);
}

function register(user) {
  users.push({
    id: Math.random(),
    email: user.email,
    password: bcrypt.hashSync(user.password, 10),
    role: user.role,
  });
}
function login(email, password) {
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
  register,
  login,
  jwtCallback,
};
