const { Schema, model } = require('mongoose');

const transactionSchema = new Schema({
  type: {
    type: String,
    required: true,
    validate: {
      validator: (type) => ['income', 'expense'].includes(type),
    },
  },
  accountId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Account',
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: null,
  },
  date_of_operation: {
    type: Date,
    required: true,
    default: Date.now,
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

transactionSchema.statics.findByAccountId = function findByAccountId(accountId) {
  return this.where({ accountId }).exec();
};

module.exports = model('Transaction', transactionSchema);
