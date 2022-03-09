const { Router } = require('express');

const router = Router();

// eslint-disable-next-line no-empty-pattern
const {
  updateUser, deleteUser, getUserById, getUsers,
} = require('./user.service');

router.get('/', getUsers);

// get user by id
router.get('/:id', getUserById);

// update
router.put('/:id', updateUser);

// delete
router.delete('/:id', deleteUser);

module.exports = router;
