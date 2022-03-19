const Account = require('./account.model');

async function createAccount(req, res) {
  const {
    title,
    description,
    category,
    currency,
    availableAmount,
  } = req.body;

  const account = {
    user_id: req.user.id,
    title,
    description,
    category,
    currency,
    availableAmount,
  };
  const newaccount = await Account.create(account);
  res.status(201).json(newaccount);
}

async function updateAccount(req, res) {
  const {
    user_id,
    title,
    description,
    category,
    currency,
    availableAmount,
  } = req.body;
  const newaccount = {
    user_id,
    title,
    description,
    category,
    currency,
    availableAmount,
  };
  const account = await Account.findByIdAndUpdate(req.params.id, newaccount);
  res.status(201).json(account);
}
async function deleteAccount(req, res, next) {
  try {
    const { id } = req.params;
    await Account.findByIdAndDelete(id);
    console.log('Asad');
    res.status(204).json();
  } catch (err) {
    next(err);
  }
}

async function getAccountByUserId(req, res, next) {
  try {
    const { id } = req.user;
    const accounts = await Account.find({ user_id: id });
    res.json(accounts);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  createAccount,
  updateAccount,
  deleteAccount,
  getAccountByUserId,
};
