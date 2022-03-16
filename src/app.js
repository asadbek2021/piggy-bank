const express = require('express');

const app = express();
const cors = require('cors');
const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');
const { Logger } = require('./tools/Logger');
const config = require('./config/config');
const errorHandler = require('./middlewares/ErrorHandler');
const userRouter = require('./resources/user/user.router');
const transactionRouter = require('./resources/transaction/transaction.router');
const accountRouter = require('./resources/account/account.router');
const statisticRouter = require('./resources/statistic/statistic.router');
const categoryRouter = require('./resources/category/category.router');
const subscriptionRouter = require('./resources/subscription/subscription.router');
const authRouter = require('./resources/auth/auth.router');
const faqRouter = require('./resources/faq/faq.router');
const piggyBankRouter = require('./resources/piggy_bank/piggy.router');
const { jwtCallback } = require('./resources/auth/auth.repository');
const addGuard = require('./middlewares/guards');
const db = require('./loader/dbconnect');

db.connect();

const auth = passport.authenticate('jwt', { session: false });

app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(passport.initialize());
app.use(Logger);

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.JWT_SECRET,
};
passport.use(new Strategy(opts, jwtCallback));

app.use('/user', auth, addGuard, userRouter);
app.use('/transaction', auth, transactionRouter);
app.use('/account', auth, accountRouter);
app.use('/statistic', auth, addGuard, statisticRouter);
app.use('/category', auth, categoryRouter);
app.use('/piggybank', auth, piggyBankRouter);
app.use('/subscription', auth, subscriptionRouter);
app.use('/auth', authRouter);
app.use('/faq', faqRouter);
app.use('/', require('./resources/home.router'));

app.use(errorHandler);

module.exports = app;
