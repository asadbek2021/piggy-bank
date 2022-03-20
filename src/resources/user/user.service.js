const HttpError = require('../../tools/httpError');
const User = require('./user.model');

async function updateUser(req, res, next) {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    if (!user) {
      throw new HttpError(`There is no user with the id ${req.params.id} `, 404);
    }
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
}

async function deleteUser(req, res, next) {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(204);
    res.redirect('/user');
  } catch (err) {
    next(err);
  }
}

async function getUserById(req, res, next) {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      throw new HttpError(`There is no user with the id ${req.params.id} `, 404);
    }
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
}
async function getUsers(req, res, next) {
  try {
    const allusers = await User.find();
    res.json(allusers);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  updateUser,
  deleteUser,
  getUserById,
  getUsers,
};
