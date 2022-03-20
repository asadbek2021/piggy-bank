const bcrypt = require('bcrypt');
const uuid = require('uuid').v4;

const User = require('../user/user.model');

async function getUserByEmail(email) {
  const user = await User.find({ email });
  return user[0];
}

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

  const hashed = await bcrypt.hashSync(password, 10);
  const newuser = await User.create({
    id: uuid(),
    email,
    role,
    firstname,
    lastname,
    gender,
    birthday,
    residence,
    password: hashed,
  });
  return newuser;
}

async function login(email, password) {
  const user = await getUserByEmail(email);
  const isSame = await bcrypt.compare(password, user.password);
  if (user && isSame) {
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
