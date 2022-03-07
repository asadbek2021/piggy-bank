const { Router } = require('express');

const router = Router();
// eslint-disable-next-line no-unused-vars
const httpError = require('../../tools/httpError');
// eslint-disable-next-line no-empty-pattern
const {} = require('./category.service');

router.get('/', (req, res) => {
  res.json({ message: 'Get all categories' });
});

router.get('/:id', (req, res) => {
  res.json({ message: 'Get category by id' });
});

router.post('/', (req, res) => {
  res.json({ message: 'Add new category' });
});

// update
router.put('/:id', (req, res) => {
  res.json({ message: 'Update category by id' });
});

// delete
router.delete('/:id', (req, res) => {
  res.json({ message: 'Delete category by id' });
});

module.exports = router;
