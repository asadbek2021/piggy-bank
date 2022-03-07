const express = require('express');

const app = express();
const path = require('path');
const exhbs = require('express-handlebars');
const cors = require('cors');
const passport = require('passport');
const { Strategy } = require('passport-jwt');
const { ExtractJwt } = require('passport-jwt');
const logger = require('./tools/Logger');
const config = require('./config/config');
const errorHandler = require('./tools/ErrorHandler');
const accountRouter = require('./resources/account/account.router');
const expenseRouter = require('./resources/expense/expense.router');
const incomeRouter = require('./resources/income/income.router');
const statisticRouter = require('./resources/statistic/statistic.router');
const categoryRouter = require('./resources/category/category.router');
const authRouter = require('./resources/auth/auth.router');
const db = require('./loader/dbconnect');

const auth = passport.authenticate('jwt', { session: false });
const hbs = exhbs.create({
  defaultLayout: 'main.hbs',
  extname: 'hbs',
  runtimeOptions: {
    allowProtoMethodsByDefault: true,
    allowProtoPropertiesByDefault: true,
  },
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('./public'));
app.use(express.json());
app.use(cors());
app.use(passport.initialize());
app.use(logger);

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.JWT_SECRET,
};
passport.use(new Strategy(opts, db.jwtCallback));

app.use('/user', auth, accountRouter);
app.use('/expense', auth, expenseRouter);
app.use('/income', auth, incomeRouter);
app.use('/statistic', auth, statisticRouter);
app.use('/category', auth, categoryRouter);
app.use('/auth', authRouter);
app.use('/', auth, require('./resources/home.router'));

app.use(errorHandler);

module.exports = app;
