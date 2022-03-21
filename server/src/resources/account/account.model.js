const { Schema, model } = require('mongoose');

const accountSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  title: {
    type: String,
    min: 3,
    required: true,
  },
  description: {
    type: String,
    default: 'Description',
  },
  currency: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = model('Account', accountSchema);
