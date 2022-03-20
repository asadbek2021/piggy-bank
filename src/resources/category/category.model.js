const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
  title: {
    type: String,
    required: true,
    min: 3,
  },
  type: {
    type: String,
  },
});

module.exports = model('Category', categorySchema);