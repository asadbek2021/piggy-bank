const express = require('express')
const app = express();
const logger = require('./tools/Logger')



app.use(express.json())
app.use(logger)


app.use('/user',require('./routes/user-router'))


module.exports = app