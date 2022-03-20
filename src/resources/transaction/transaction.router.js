const { Router } = require('express');
const { getAllTransAccount, getTransById, createTrans } = require('./transaction.service');

const router = Router();

router.get('/', getAllTransAccount);

router.get('/:id', getTransById);

router.post('/', createTrans);

router.put('/:id', (req, res) => {
  res.json({ message: 'Update expense by id' });
});

router.delete('/:id', (req, res) => {
  res.json({ message: 'Delete expense by id' });
});

module.exports = router;
