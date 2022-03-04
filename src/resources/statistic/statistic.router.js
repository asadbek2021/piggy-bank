const { Router } = require('express');

const router = Router();
// eslint-disable-next-line no-unused-vars
const httpError = require('../../tools/httpError');
// eslint-disable-next-line no-empty-pattern
const {} = require('./statistic.service');

router.get('/', (req, res) => {
  res.json({ message: 'Get all statistics' });
});

router.get('/:id', (req, res) => {
  res.json({ message: 'Get statistics by id' });
});

module.exports = router;
