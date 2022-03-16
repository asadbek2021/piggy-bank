const { Router } = require('express');
const {
  getAllPiggyBanks,
  getPiggyBankById,
  createPiggyBank,
  updatePiggyBank,
  crashPiggyBank,
} = require('./piggy.service');

const router = Router();

router.get('/', getAllPiggyBanks);

router.get('/:id', getPiggyBankById);

router.post('/', createPiggyBank);

router.put('/:id', updatePiggyBank);

router.delete('/:id', crashPiggyBank);

module.exports = router;
