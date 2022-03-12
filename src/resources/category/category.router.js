const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Get all categories' });
});

router.get('/:id', (req, res) => {
  res.json({ message: 'Get category by id' });
});

router.post('/', (req, res) => {
  res.json({ message: 'Add new category' });
});

router.put('/:id', (req, res) => {
  res.json({ message: 'Update category by id' });
});

router.delete('/:id', (req, res) => {
  res.json({ message: 'Delete category by id' });
});

module.exports = router;
