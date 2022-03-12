const users = [];
const accounts = [];
const piggybanks = [];
const transactions = [];

function getUserByEmail(email) {
  return users.find((c) => c.email === email);
}

module.exports = {
  users,
  accounts,
  piggybanks,
  transactions,
  getUserByEmail,
};
