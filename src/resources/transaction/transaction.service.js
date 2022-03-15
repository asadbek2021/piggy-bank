const Transaction = require('./transaction.model');

async function getAllTransAccount(req, res, next) {
  try {
    const { id } = req.params;
    const transactions = await Transaction.findByAccountId(id);
    res.json(transactions);
  } catch (err) {
    next(err);
  }
}

async function getTransById(req, res, next) {
  try {
    const { id } = req.params;
    const transactions = await Transaction.findById(id);
    res.json(transactions);
  } catch (err) {
    next(err);
  }
}

async function createTrans(req, res, next) {
  try {
    const {
      type,
      title,
      accountId,
      description,
      date_of_operation,
      category,
      amount,
    } = req.body;
    const newtransaction = {
      type,
      title,
      accountId,
      description,
      date_of_operation,
      category,
      amount,
    };

    const transaction = await Transaction.create(newtransaction);
    res.json(transaction);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAllTransAccount,
  getTransById,
  createTrans,
};
