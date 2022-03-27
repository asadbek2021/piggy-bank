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
    default: null,
  },
  currency: {
    type: String,
    required: true,
  },
}, { timestamps: true });

accountSchema.statics.getByUserId = function getById(user_id) {
  return this.where({ user_id }).exec();
};

module.exports = model('Account', accountSchema);
