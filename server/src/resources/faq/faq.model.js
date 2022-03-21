const { Schema, model } = require('mongoose');

const faqSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = model('Faq', faqSchema);
