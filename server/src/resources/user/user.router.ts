import { Router } from 'express';
import addGuard from '../../middlewares/guards';

const router = Router();

import { 
    updateUser, 
    deleteUser, 
    getUserById, 
    getUsers, 
    createUser
} from './user.service';
import { cleanCache } from '../../middlewares/cleanCacheMiddleware';

router.get('/', addGuard, getUsers);

router.get('/:id', getUserById);

router.put('/:id', cleanCache, updateUser);
router.post('/', cleanCache, createUser);

router.delete('/:id', cleanCache, deleteUser);

export default router;
