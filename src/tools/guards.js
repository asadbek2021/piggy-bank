const User = require('../resources/user/user.model');

const addGuard = async function guard(req, res, next) {
  const [user] = await User.find({ email: req.user.email });
  if (user?.role === 'ADMIN') {
    return next();
  }
  return res.status(403).json({ message: 'You are not allowed' });
};

module.exports = addGuard;
