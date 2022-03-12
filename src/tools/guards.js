const db = require('../loader/dbconnect');

const addGuard = function guard(req, res, next) {
  const user = db.getUserByEmail(req.user.email);
  if (user?.role === 'ADMIN') {
    return next();
  }
  return res.json({ message: 'You are not allowed' });
};

module.exports = addGuard;
