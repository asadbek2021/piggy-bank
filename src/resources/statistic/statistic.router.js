const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Get all statistics' });
});

router.get('/:id', (req, res) => {
  res.json({ message: 'Get statistics by id' });
});

module.exports = router;
