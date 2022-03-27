const Currency = require('./currency.model');

async function getAllCurrencies(req, res, next) {
  try {
    const currencies = await Currency.find({});
    res.json(currencies);
  } catch (err) {
    next(err);
  }
}

async function getCurrencyById(req, res, next) {
  try {
    const { id } = req.params;
    const currency = await Currency.findByIdAndUpdate(id);
    res.json(currency);
  } catch (err) {
    next(err);
  }
}

async function createCurrency(req, res, next) {
  try {
    const currencies = await Currency.create(req.body);
    res.json(currencies);
  } catch (err) {
    next(err);
  }
}

async function updateCurrency(req, res, next) {
  try {
    const { id } = req.params;
    const currencies = await Currency.findByIdAndUpdate(id, req.body);
    res.json(currencies);
  } catch (err) {
    next(err);
  }
}

async function deleteCurrency(req, res, next) {
  try {
    const { id } = req.params;
    await Currency.findByIdAndDelete(id);
    res.status(204).json();
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAllCurrencies,
  createCurrency,
  updateCurrency,
  deleteCurrency,
  getCurrencyById,
};
