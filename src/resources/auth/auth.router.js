const { Router } = require('express');
const { check } = require('express-validator');

const router = Router();
const { registerUser, loginUser } = require('./auth.service');

router.post('/login', [
  check('email', 'Your email is not valid.').isEmail(),
  check('password', 'Your password should be min 4 and max 6').isLength({ min: 4, max: 6 }).isAlphanumeric(),
], loginUser);
router.post('/register', [
  check('email', 'Enter the valid email').isEmail(),
  check('password', 'Your password should be min 4 and max 6').isLength({ min: 4, max: 6 }).isAlphanumeric(),
  check('role', 'You can choose only one of these roles: ADMIN or USER').isIn(['ADMIN', 'USER']),
], registerUser);

module.exports = router;
