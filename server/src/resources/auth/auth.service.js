const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const HttpError = require('../../tools/httpError');
const { register, login } = require('./auth.repository');
const config = require('../../config/config');

async function registerUser(req, res, next) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new HttpError('Registration error', 403, errors);
    }
    const {
      email,
      password,
      role,
      firstname,
      lastname,
      gender,
      birthday,
      residence,
    } = req.body;
    if (new Date().getFullYear() - new Date(birthday).getFullYear() >= 18) {
      const user = await register({
        email,
        password,
        role,
        firstname,
        lastname,
        gender,
        birthday,
        residence,
      });
      res.json(user);
    } else {
      throw new HttpError('Registering age is over 18 y.o', 401);
    }
  } catch (err) {
    next(err);
  }
}

async function loginUser(req, res, next) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new HttpError('Registration error', 403, errors);
    }
    const { email, password } = req.body;
    const user = await login(email, password);
    if (user) {
      const payload = {
        id: user.id,
        email: user.email,
        role: user.role,
      };
      const token = jwt.sign(
        payload,
        config.JWT_SECRET,
        { expiresIn: config.JWT_EXPIRES_IN },
      );
      res.status(200).json({
        id: user.id,
        email: user.email,
        role: user.role,
        token: `Bearer ${token}`,
      });
    } else {
      throw new HttpError('Invalid credentials!', 404);
    }
  } catch (err) {
    next(err);
  }
}

module.exports = {
  registerUser,
  loginUser,
};
