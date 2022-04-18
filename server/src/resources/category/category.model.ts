const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    min: 3,
  },
  type: {
    type: String,
    validate: {
      validator: (type) => ['income', 'expense'].includes(type),
      message: '{VALUE} is not a valid type, accept only income or expense',
    },
  },
});

module.exports = model('Category', categorySchema);
