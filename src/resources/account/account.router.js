const { Router } = require('express');
const {
  createAccount, deleteAccount, getAccountByUserId, updateAccount,
} = require('./account.service');

const router = Router();

router.get('/', getAccountByUserId);

router.post('/', createAccount);

router.put('/:id', updateAccount);

router.delete('/:id', deleteAccount);

module.exports = router;
