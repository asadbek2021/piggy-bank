const { Router } = require('express');
const addGuard = require('../../middlewares/guards');

const router = Router();

const {
  updateUser, deleteUser, getUserById, getUsers,
} = require('./user.service');

router.get('/', addGuard, getUsers);

router.get('/:id', getUserById);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

module.exports = router;
