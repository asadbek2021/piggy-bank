const { Router } = require('express');
// const User = require('./user/user.model');

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

// async function exists(email) {
//   const user = await User.exists({ email }); // returns an object with the _id
//   console.log(user);
// }

// exists('asadbek@gmail.com');

// async function getUser() {
//   // sorting by name gte and lte. exec() is needed to get full promise
//   // also we have populate
//   const users = await User
//     .where('createdAt')
//     .gte(new Date('2022-01-01'))
//     .lte(new Date('2022-03-31'))
//     .sort({ firstname: -1 })
//     .limit(2)
//     .select('firstname')
//     .exec();
//   console.log(users);
// }

// getUser();
// async function mehtodCheck(email) {
//   // private method of the instance from model not static
//   const user = await User.findOne({ email });
//   user.sayHi();
// }

// mehtodCheck('jack@gmail.com');
// async function staticMethod() {
//   // static method of the model
//   const user = await User.findByEmail('jack');
//   console.log(user);
// }

// staticMethod();
// async function ByName() {
//   const user = await User.findOne().byName('jack'); // custom query method
//   console.log(user.fullname); // virtual getter works)
//   user.fullname = 'Abduvali Abdujabborov'; // virtual setter works
//   console.log(user.firstname);
// }

// ByName();

module.exports = router;
