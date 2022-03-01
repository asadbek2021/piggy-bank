const express = require('express')
const app = express();


app.get('/',(req,res)=>{
    res.send('Hello World!')
})

app.post('/',(req,res)=>{
    console.log(req.body);
})

app.listen(()=>{
    console.log(`Sever is running!`);
})