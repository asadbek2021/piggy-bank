const { Router } = require('express');
const {
  getAllTransAccount,
  getTransById,
  createTrans,
  updateTrans,
  deleteTrans,
} = require('./transaction.service');

const router = Router();

router.get('/', getAllTransAccount);

router.get('/:id', getTransById);

router.post('/', createTrans);

router.put('/:id', updateTrans);

router.delete('/:id', deleteTrans);

module.exports = router;
