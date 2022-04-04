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
  const newUser = await User.create({
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
  return newUser;
}

async function login(email, password) {
  const user = await getUserByEmail(email);
  if (user) {
    const result = await bcrypt.compare(password, user.password);
    if (result) {
      return user;
    }
  }
  return null;
}

async function jwtCallback(jwtPayload, done) {
  const user = await getUserByEmail(jwtPayload.email);
  return done(null, user || false);
}

module.exports = {
  register,
  login,
  jwtCallback,
};
