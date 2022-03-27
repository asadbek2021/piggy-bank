const HttpError = require('../../tools/httpError');
const UserRepository = require('./user.repository');

async function updateUser(req, res, next) {
  try {
    const user = await UserRepository.editUser(req.params.id, req.body);
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
    await UserRepository.removeUser(req.params.id);
    res.status(204).json();
  } catch (err) {
    next(err);
  }
}

async function getUserById(req, res, next) {
  try {
    const user = await UserRepository.getUserByID(req.params.id);
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
    const allusers = await UserRepository.getUserAll();
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
