const uuid = require('uuid').v4;
const { accounts } = require('../../loader/dbconnect');

async function createAccount(req, res) {
  const {
    userId,
    title,
    description,
    category,
    currency,
    availableAmount,
  } = req.body;
  const created = new Date().getTime();
  const updated = null;

  const account = {
    id: uuid(),
    userId,
    title,
    description,
    category,
    currency,
    availableAmount,
    created,
    updated,
  };
  accounts.push(account);
  res.status(201).json(accounts);
}
async function updateAccount(req, res) {
  const {
    id,
    userId,
    title,
    description,
    category,
    currency,
    availableAmount,
    created,
  } = req.body;
  const updated = new Date().getTime();
  const newaccount = {
    id,
    userId,
    title,
    description,
    category,
    currency,
    availableAmount,
    created,
    updated,
  };
  accounts.push(newaccount);
  res.status(201).json(accounts);
}
async function deleteAccount(req, res) {
  const { id } = req.params;
  const idx = accounts.findIndex((c) => c.id === id);
  accounts.slice(idx, 1);
  res.status(204).redirect('/account');
}

async function getAccountById(req, res) {
  const { id } = req.params;
  const account = accounts.find((c) => c.id === id);
  res.json(account);
}

module.exports = {
  createAccount,
  updateAccount,
  deleteAccount,
  getAccountById,
};
