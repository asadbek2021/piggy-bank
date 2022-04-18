const { Router } = require('express');
const {
  createCurrency,
  deleteCurrency,
  getAllCurrencies,
  updateCurrency,
  getCurrencyById,
} = require('./currency.service');

const router = Router();

router.get('/', getAllCurrencies);
router.get('/:id', getCurrencyById);
router.post('/', createCurrency);
router.put('/:id', updateCurrency);
router.delete('/:id', deleteCurrency);

module.exports = router;
