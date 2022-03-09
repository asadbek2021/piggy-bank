const db = require('../../loader/dbconnect');
const HttpError = require('../../tools/httpError');

const { users } = db;

async function createAccount(req, res) {
  users.push(req.body);
  res.status(200).json({ message: 'User was succesfully added!' });
}

async function updateAccount(req, res) {
  const index = users.findIndex((c) => c.id === +req.params.id);
  const { name, age } = req.body;
  if (index === -1) {
    res.status(404).json({ message: `User with id: ${req.params.id} cannot be found!` });
    return;
  }
  users[index] = {
    id: req.params.id,
    name,
    age,
  };
  res.status(200).json(users[index]);
}

async function deleteAccount(req, res) {
  const index = users.findIndex((c) => c.id === +req.params.id);
  if (index === -1) {
    res.status(404).json({ message: `User with id: ${req.params.id} cannot be found!` });
    return;
  }
  users.splice(index, 1);
  res.status(204);
  res.redirect('/user');
}

async function getAccountById(req, res) {
  const user = users.find((c) => c.id === +req.params.id);
  if (!user) {
    throw new HttpError(`There is no user with the id ${req.params.id} `, 404);
  }
  res.render('users/getByid', {
    user,
  });
}
async function getAccounts(req, res) {
  res.render('users/user', {
    users,
  });
}

module.exports = {
  createAccount,
  updateAccount,
  deleteAccount,
  getAccountById,
  getAccounts,
};
