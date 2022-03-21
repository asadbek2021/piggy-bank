const Category = require('./category.model');

async function getAllCategories(req, res, next) {
  try {
    const categories = await Category.find({});
    res.json(categories);
  } catch (err) {
    next(err);
  }
}

async function getCategoryById(req, res, next) {
  try {
    const { id } = req.params;
    const category = await Category.findById(id);
    res.json(category);
  } catch (err) {
    next(err);
  }
}

async function createCategory(req, res, next) {
  try {
    const category = await Category.create(req.body);
    res.json(category);
  } catch (err) {
    next(err);
  }
}

async function updateCategory(req, res, next) {
  try {
    const { id } = req.params;
    const category = await Category.findByIdAndUpdate(id, req.body, { new: true });
    res.json(category);
  } catch (err) {
    next(err);
  }
}

async function deleteCategory(req, res, next) {
  try {
    const { id } = req.params;
    await Category.findByIdAndDelete(id);
    res.status(204).json();
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
