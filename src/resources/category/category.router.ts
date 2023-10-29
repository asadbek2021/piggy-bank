import { Router } from 'express';
import { getAllCategories, getCategoryById, createCategory, updateCategory, deleteCategory } from './category.service';
import { cleanCache } from '../../middlewares/cleanCacheMiddleware';

const router = Router();

router.get('/', getAllCategories);
router.get('/:id', getCategoryById);
router.post('/', cleanCache, createCategory);
router.put('/:id', cleanCache, updateCategory);
router.delete('/:id', cleanCache, deleteCategory);

export default router;
