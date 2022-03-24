const { Router } = require('express');
const {
  createFaq,
  deleteFaq,
  getAllFaqs,
  updateFaq,
  getFaqById,
} = require('./faq.service');
const auth = require('../../middlewares/authMiddleware');

const router = Router();

router.get('/', getAllFaqs);
router.get('/:id', getFaqById);
router.post('/', auth, createFaq);
router.put('/:id', auth, updateFaq);
router.delete('/:id', auth, deleteFaq);

module.exports = router;
