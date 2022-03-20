const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    min: 7,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    default: 'USER',
  },
  firstname: {
    type: String,
    required: true,
    min: 3,
  },
  lastname: {
    type: String,
    required: true,
    min: 3,
  },
  gender: {
    type: String,
    required: true,
  },
  birthday: {
    type: Date,
    required: true,
  },
  residence: {
    type: String,
    required: true,
  },

}, { timestamps: true });

userSchema.methods.sayHi = function greet() {
  console.log(`Hi, I'm ${this.firstname}`);
};

userSchema.statics.findByEmail = function findByEmail(email) {
  return this.where({ email: new RegExp(email, 'i') }).exec();
};

userSchema.query.byName = function byName(name) {
  return this.where({ firstname: new RegExp(name, 'i') });
};

userSchema.virtual('fullname').get(function getFullname() {
  return `${this.firstname} ${this.lastname}`;
}).set(function setFullname(fullname) {
  const [firstname, lastname] = fullname.split(' ');
  this.firstname = firstname;
  this.lastname = lastname;
});

module.exports = model('User', userSchema);
