const { Router } = require('express');
const {
  createFaq,
  deleteFaq,
  getAllFaqs,
  updateFaq,
} = require('./faq.service');

const router = Router();

router.get('/', getAllFaqs);

router.post('/', createFaq);

router.put('/:id', updateFaq);
router.delete('/:id', deleteFaq);

module.exports = router;
