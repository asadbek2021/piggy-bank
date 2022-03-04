const { Router } = require('express');

const router = Router();
const HttpError = require('../../tools/httpError');
// eslint-disable-next-line no-empty-pattern
const {} = require('./account.service');

const users = [
  { name: 'John', age: 23, id: 1 },
  { name: 'Alex', age: 34, id: 2 },
  { name: 'Billy', age: 30, id: 3 },
];

router.get('/', (req, res) => {
  res.render('users/user', {
    users,
  });
});

// get user by id
router.get('/:id', (req, res) => {
  const user = users.find((c) => c.id === +req.params.id);
  if (!user) {
    throw new HttpError(`There is no user with the id ${req.params.id} `, 404);
  }
  res.render('users/getByid', {
    user,
  });
});

router.post('/', (req, res) => {
  users.push(req.body);
  res.status(200).json({ message: 'User was succesfully added!' });
});

// update
router.put('/:id', (req, res) => {
  const index = users.findIndex((c) => c.id === +req.params.id);
  const { name, age } = req.body;
  if (index === -1) {
    res.status(404).json({ message: `User with id: ${req.params.id} cannot be found!` });
    return;
  }
  users[index] = {
    id: req.params.id,
    name,
    age,
  };
  res.status(200).json(users[index]);
});

// delete
router.delete('/:id', (req, res) => {
  const index = users.findIndex((c) => c.id === +req.params.id);
  if (index === -1) {
    res.status(404).json({ message: `User with id: ${req.params.id} cannot be found!` });
    return;
  }
  users.splice(index, 1);
  res.status(204);
  res.redirect('/user');
});

module.exports = router;
