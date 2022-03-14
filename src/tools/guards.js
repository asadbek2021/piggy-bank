const User = require('../resources/user/user.model');

const addGuard = async function guard(req, res, next) {
  const [user] = await User.find({ email: req.user.email });
  if (user?.role === 'ADMIN') {
    return next();
  }
  return res.json({ message: 'You are not allowed' });
};

module.exports = addGuard;
