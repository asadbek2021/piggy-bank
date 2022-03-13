const bcrypt = require('bcrypt');
const uuid = require('uuid').v4;

const { users } = require('../../loader/dbconnect');

function getUserByEmail(email) {
  return users.find((c) => c.email === email);
}

function register(user) {
  const {
    email,
    role,
    firstname,
    lastname,
    gender,
    birthday,
    residence,
    password,
  } = user;

  users.push({
    id: uuid(),
    email,
    role,
    firstname,
    lastname,
    gender,
    birthday,
    residence,
    password: bcrypt.hashSync(password, 10),
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
