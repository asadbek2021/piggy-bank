const { Schema, model } = require('mongoose');

const ObligatorySchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    default: 'Description',
  },
  amount: {
    type: Number,
    required: true,
  },
  firstPaymentDate: {
    type: Date,
    required: true,
  },
  lastPaymentDate: {
    type: Date,
    required: true,
  },
  frequency: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = model('Obligatory', ObligatorySchema);
