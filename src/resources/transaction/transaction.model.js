const { Schema, model } = require('mongoose');

const transactionSchema = new Schema({
  type: {
    type: String,
    required: true,
  },
  account_id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: 'Description',
  },
  date_of_operation: {
    type: Date,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
    default: 0,
  },
}, { timestamps: true });

module.exports = model('Transaction', transactionSchema);
