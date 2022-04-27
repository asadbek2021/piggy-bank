import { Router } from 'express';
import { getAllTransAccount, getTransById, createTrans, updateTrans, deleteTrans } from './transaction.service';

const router = Router();

router.get('/:accoundId', getAllTransAccount);
router.get('/account/:id', getTransById);
router.post('/:accountId', createTrans);
router.put('/:id', updateTrans);
router.delete('/:id', deleteTrans);

export default router;
