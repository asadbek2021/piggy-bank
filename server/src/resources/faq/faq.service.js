const Faq = require('./faq.model');

async function getAllFaqs(req, res, next) {
  try {
    const faqs = await Faq.find({}).exec();
    res.json(faqs);
  } catch (err) {
    next(err);
  }
}

async function createFaq(req, res, next) {
  try {
    const faq = await Faq.create(req.body);
    res.json(faq);
  } catch (err) {
    next(err);
  }
}

async function updateFaq(req, res, next) {
  try {
    const faq = await Faq.findByIdAndUpdate(req.params.id, req.body);
    res.json(faq);
  } catch (err) {
    next(err);
  }
}

async function deleteFaq(req, res, next) {
  try {
    await Faq.findByIdAndDelete(req.params.id);
    res.status(204).json();
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAllFaqs,
  createFaq,
  updateFaq,
  deleteFaq,
};
