const { Router } = require('express');
const {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} = require('./category.service');

const router = Router();

router.get('/', getAllCategories);

router.get('/:id', getCategoryById);

router.post('/', createCategory);

router.put('/:id', updateCategory);

router.delete('/:id', deleteCategory);

module.exports = router;
