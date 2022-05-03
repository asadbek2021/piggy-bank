import { Router } from 'express';
import { getAllTransAccount, getTransById, createTrans, updateTrans, deleteTrans } from './transaction.service';

const router = Router();

router.get('/:accoundId', getAllTransAccount);
router.get('/:accoundId/:id', getTransById);
router.post('/:accountId', createTrans);
router.put('/:accoundId/:id', updateTrans);
router.delete('/:accoundId/:id', deleteTrans);

export default router;
