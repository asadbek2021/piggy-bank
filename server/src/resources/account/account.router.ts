import { Router } from 'express';
import { createAccount, deleteAccount, getAccountByUserId, updateAccount, getAccountById } from './account.service';

const router = Router();

router.get('/', getAccountByUserId);
router.get('/:id', getAccountById);
router.post('/', createAccount);
router.put('/:id', updateAccount);
router.delete('/:id', deleteAccount);

export default router;