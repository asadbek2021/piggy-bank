const { users } = require('../../loader/db.loader');

async function getUserByEmail(email) {
  const user = users.find((c) => c.email === email);
  return user;
}

module.exports = {
  getUserByEmail,
};
