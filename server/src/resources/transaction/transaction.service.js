const Transaction = require('./transaction.model');

async function getAllTransAccount(req, res, next) {
  try {
    const { accoundId } = req.params;
    const transactions = await Transaction.findByAccountId(accoundId);
    res.json(transactions);
  } catch (err) {
    next(err);
  }
}

async function getTransById(req, res, next) {
  try {
    const { id } = req.params;
    const transaction = await Transaction.findById(id);
    res.json(transaction);
  } catch (err) {
    next(err);
  }
}

async function createTrans(req, res, next) {
  try {
    const transaction = await Transaction.create({ ...req.body, accountId: req.params.accountId });
    res.json(transaction);
  } catch (err) {
    next(err);
  }
}
async function updateTrans(req, res, next) {
  try {
    const { id } = req.params;
    const transaction = await Transaction.findByIdAndUpdate(id, req.body, { new: true });
    res.json(transaction);
  } catch (err) {
    next(err);
  }
}

async function deleteTrans(req, res, next) {
  try {
    const { id } = req.params;
    await Transaction.findByIdAndDelete(id);
    res.status(204).json();
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAllTransAccount,
  getTransById,
  createTrans,
  updateTrans,
  deleteTrans,
};
