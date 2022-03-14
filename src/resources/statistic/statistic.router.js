const { Router } = require('express');
const { getAllStatistics } = require('./statistics.service');

const router = Router();

router.get('/', getAllStatistics);

module.exports = router;
