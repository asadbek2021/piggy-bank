const { getUserByEmail } = require('../resources/user/user.repository');

const addGuard = async function guard(req, res, next) {
  const user = await getUserByEmail(req.user.email);
  if (user?.role === 'ADMIN') {
    return next();
  }
  return res.json({ message: 'You are not allowed' });
};

module.exports = addGuard;
