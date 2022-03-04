require('dotenv').config({path:'../.env'})
const express = require('express')
const app = express();
const path = require('path')
const exhbs = require('express-handlebars')
const logger = require('./tools/Logger')
const errorHandler = require('./tools/ErrorHandler')

const hbs = exhbs.create({
    defaultLayout: 'main.hbs',
    extname:'hbs',
    runtimeOptions:{
        allowProtoMethodsByDefault: true,
        allowProtoPropertiesByDefault: true
    }
})

app.engine('hbs', hbs.engine)
app.set('view engine','hbs')
app.set('views',path.join(__dirname,'views'))
app.use(express.static('./public'))
app.use(express.json())
app.use(logger)


app.use('/user',require('./routes/account.router'))
app.use('/',require('./routes/home.router'))

app.use(errorHandler)

module.exports = app