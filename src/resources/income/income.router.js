const { Router } = require('express');

const router = Router();
// eslint-disable-next-line no-unused-vars
const httpError = require('../../tools/httpError');
// eslint-disable-next-line no-empty-pattern
const {} = require('./income.service');

router.get('/', (req, res) => {
  res.json({ message: 'Get all incomes' });
});

router.get('/:id', (req, res) => {
  res.json({ message: 'Get income by id' });
});

router.post('/', (req, res) => {
  res.json({ message: 'Add new income' });
});

// update
router.put('/:id', (req, res) => {
  res.json({ message: 'Update income by id' });
});

// delete
router.delete('/:id', (req, res) => {
  res.json({ message: 'Delete income by id' });
});

module.exports = router;
