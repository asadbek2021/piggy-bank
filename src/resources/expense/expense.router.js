const { Router } = require('express');

const router = Router();
// eslint-disable-next-line no-unused-vars
const httpError = require('../../tools/httpError');
// eslint-disable-next-line no-empty-pattern
const {} = require('./expense.service');

router.get('/', (req, res) => {
  res.json({ message: 'Get all expenses' });
});

router.get('/:id', (req, res) => {
  res.json({ message: 'Get expense by id' });
});

router.post('/', (req, res) => {
  res.json({ message: 'Add new expense' });
});

// update
router.put('/:id', (req, res) => {
  res.json({ message: 'Update expense by id' });
});

// delete
router.delete('/:id', (req, res) => {
  res.json({ message: 'Delete expense by id' });
});

module.exports = router;
