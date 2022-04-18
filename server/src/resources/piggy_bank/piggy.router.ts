const { Router } = require('express');
const {
  getAllPiggyBanks,
  getPiggyBankById,
  createPiggyBank,
  updatePiggyBank,
  crashPiggyBank,
} = require('./piggy.service');

const router = Router();

router.get('/:accountId', getAllPiggyBanks);

router.get('/account/:id', getPiggyBankById);

router.post('/:accountId', createPiggyBank);

router.put('/:id', updatePiggyBank);

router.delete('/:id', crashPiggyBank);

module.exports = router;
