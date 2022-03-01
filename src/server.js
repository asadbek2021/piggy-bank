const express = require('express')
const app = express();


const logger = function (req,res,next) { 
    console.log(`${req.method} - ${req.originalUrl} `,req.body);
    next()
 }

app.use(express.json())
app.use(logger)


app.use('/user',require('./routes/user-router'))




const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`Sever is running!`);
})