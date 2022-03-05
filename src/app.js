const express = require('express');

const app = express();
const path = require('path');
const exhbs = require('express-handlebars');
const logger = require('./tools/Logger');
const errorHandler = require('./tools/ErrorHandler');
const accountRouter = require('./resources/account/account.router');
const expenseRouter = require('./resources/expense/expense.router');
const incomeRouter = require('./resources/income/income.router');
const statisticRouter = require('./resources/statistic/statistic.router');
const categoryRouter = require('./resources/category/category.router');

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
app.use(logger);

app.use('/user', accountRouter);
app.use('/expense', expenseRouter);
app.use('/income', incomeRouter);
app.use('/statistic', statisticRouter);
app.use('/category', categoryRouter);
app.use('/', require('./resources/home.router'));

app.use(errorHandler);

module.exports = app;
