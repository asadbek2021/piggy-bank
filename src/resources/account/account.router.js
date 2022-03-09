const { Router } = require('express');
const {
  createAccount, deleteAccount, getAccountById, updateAccount,
} = require('./account.service');

const router = Router();
// eslint-disable-next-line no-unused-vars
const httpError = require('../../tools/httpError');
// eslint-disable-next-line no-empty-pattern

router.get('/:id', getAccountById);

router.post('/', createAccount);

// update
router.put('/:id', updateAccount);

// delete
router.delete('/:id', deleteAccount);

module.exports = router;
