const { Router } = require('express');

const router = Router();
const jwt = require('jsonwebtoken');

const db = require('../../loader/dbconnect');
const config = require('../../config/config');

const { registerUser, loginUser } = db;

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = loginUser(email, password);
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
    res.status(401).json({ message: 'Invalid credentials!' });
  }
});

router.post('/register', (req, res) => {
  const { email, password, role } = req.body;
  registerUser({ email, password, role });
  res.json(db.users);
});

module.exports = router;
