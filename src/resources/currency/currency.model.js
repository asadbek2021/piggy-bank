const { Schema, model } = require('mongoose');

const currencySchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  symbol: {
    type: String,
    required: true,
  },
});

module.exports = model('User', currencySchema);
