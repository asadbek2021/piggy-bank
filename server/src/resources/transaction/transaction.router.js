const { Router } = require('express');
const {
  getAllTransAccount,
  getTransById,
  createTrans,
  updateTrans,
  deleteTrans,
} = require('./transaction.service');

const router = Router();

router.get('/:accoundId', getAllTransAccount);

router.get('/account/:id', getTransById);

router.post('/:accountId', createTrans);

router.put('/:id', updateTrans);

router.delete('/:id', deleteTrans);

module.exports = router;
