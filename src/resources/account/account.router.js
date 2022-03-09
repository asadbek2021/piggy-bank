const { Router } = require('express');

const router = Router();

// eslint-disable-next-line no-empty-pattern
const {
  createAccount, updateAccount, deleteAccount, getAccountById, getAccounts,
} = require('./account.service');

router.get('/', getAccounts);

// get user by id
router.get('/:id', getAccountById);

router.post('/', createAccount);

// update
router.put('/:id', updateAccount);

// delete
router.delete('/:id', deleteAccount);

module.exports = router;
