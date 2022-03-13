const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Get all expenses' });
});

router.get('/:id', (req, res) => {
  res.json({ message: 'Get expense by id' });
});

router.post('/', (req, res) => {
  res.json({ message: 'Add new expense' });
});

router.put('/:id', (req, res) => {
  res.json({ message: 'Update expense by id' });
});

router.delete('/:id', (req, res) => {
  res.json({ message: 'Delete expense by id' });
});

module.exports = router;
