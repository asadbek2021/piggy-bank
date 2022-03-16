const bcrypt = require('bcrypt');
const uuid = require('uuid').v4;

const { users } = require('../../loader/db.loader');
const { getUserByEmail } = require('../user/user.repository');

async function register(user) {
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
async function login(email, password) {
  const user = await getUserByEmail(email);
  if (user && bcrypt.compareSync(password, user.password)) {
    return user;
  }
  return null;
}

async function jwtCallback(jwtPayload, done) {
  const user = await getUserByEmail(jwtPayload.email);
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
