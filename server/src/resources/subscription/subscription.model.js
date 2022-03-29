const { Schema, model } = require('mongoose');

const subscriptionSchema = new Schema({
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
  first_day_payment: {
    type: Date,
    required: true,
  },
  last_day_payment: {
    type: Date,
    required: true,
  },
  day_of_payment: {
    type: Date,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    default: 0,
  },
  currency: {
    type: String,
    required: true,
  },
}, { timestamp: true });

module.exports = model('Subscription', subscriptionSchema);
