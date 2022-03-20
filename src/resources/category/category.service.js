async function getAllCategories(req, res, next) {
  try {
    res.json({ message: 'Get all categories' });
  } catch (err) {
    next(err);
  }
}

async function getCategoryById(req, res, next) {
  try {
    const { id } = req.params;
    res.json({ message: 'Get all categories', id });
  } catch (err) {
    next(err);
  }
}

async function createCategory(req, res, next) {
  try {
    res.json({ message: 'Add new category' });
  } catch (err) {
    next(err);
  }
}

async function updateCategory(req, res, next) {
  try {
    res.json({ message: 'Update category by id' });
  } catch (err) {
    next(err);
  }
}

async function deleteCategory(req, res, next) {
  try {
    res.json({ message: 'Delete category by id' });
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
