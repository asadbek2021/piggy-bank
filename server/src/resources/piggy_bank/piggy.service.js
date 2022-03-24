const PiggyBank = require('./piggy.model');

async function getAllPiggyBanks(req, res, next) {
  try {
    const { accountId } = req.params;
    const piggyBanks = await PiggyBank.find({ accountId });
    res.json(piggyBanks);
  } catch (err) {
    next(err);
  }
}

async function getPiggyBankById(req, res, next) {
  try {
    const { id } = req.params;
    const piggybank = await PiggyBank.findById(id);
    res.json(piggybank);
  } catch (err) {
    next(err);
  }
}

async function createPiggyBank(req, res, next) {
  try {
    const piggybank = await PiggyBank.create({ ...req.body, accountId: req.params.accountId });
    res.json(piggybank);
  } catch (err) {
    next(err);
  }
}

async function updatePiggyBank(req, res, next) {
  try {
    const { id } = req.params;
    const piggybank = await PiggyBank.findByIdAndUpdate(id, req.body, { new: true });
    res.json(piggybank);
  } catch (err) {
    next(err);
  }
}

async function crashPiggyBank(req, res, next) {
  try {
    const { id } = req.params;
    await PiggyBank.findByIdAndDelete(id);
    res.status(204).json();
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAllPiggyBanks,
  getPiggyBankById,
  createPiggyBank,
  updatePiggyBank,
  crashPiggyBank,
};
