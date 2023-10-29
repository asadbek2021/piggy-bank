import { Router } from 'express';

import { 
    createAccount, 
    deleteAccount, 
    getAccountsByUserId, 
    updateAccount, 
    getAccountById 
} from './account.service';
import { cleanCache } from '../../middlewares/cleanCacheMiddleware';

const router = Router();

router.get('/', getAccountsByUserId);
router.get('/:id', getAccountById);
router.post('/', cleanCache, createAccount);
router.put('/:id', cleanCache, updateAccount);
router.delete('/:id', cleanCache, deleteAccount);

export default router;
