import { Router } from 'express';

import { 
    getAllTransAccount, 
    getTransById, 
    createTrans, 
    updateTrans, 
    deleteTrans 
} from './transaction.service';
import { cleanCache } from '../../middlewares/cleanCacheMiddleware';

const router = Router();

router.get('/:accoundId', getAllTransAccount);
router.get('/:accoundId/:id', getTransById);
router.post('/:accountId', cleanCache, createTrans);
router.put('/:accoundId/:id', cleanCache, updateTrans);
router.delete('/:accoundId/:id', cleanCache, deleteTrans);

export default router;
