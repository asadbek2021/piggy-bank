const {Router} = require('express')
const router = Router();
const users = [
    {name: 'John',age:23,id: 1},
    {name: 'Alex',age:34, id :2},
    {name: 'Billy',age:30, id:3},
]

router.get('/',(req,res)=>{
    res.render('users/user',{
        users
    })
})

router.post('/',(req,res)=>{
    users.push(req.body)
    res.status(200).json({message: 'User was succesfully added!'})
})

// update
router.put('/:id',(req,res)=>{
    let index = users.findIndex(c=> c.id == req.params.id)
    const {name,age} = req.body
    if(index==-1){
        res.status(404).json({message: `User with id: ${req.params.id} cannot be found!`})
        return
    }
    users[index] = {
        id: req.params.id,
        name,
        age
    }
    res.status(200).json(users[index])
})

// delete
router.delete('/:id',(req,res)=>{
    let index = users.findIndex(c=> c.id == req.params.id)
    if(index==-1){
        res.status(404).json({message: `User with id: ${req.params.id} cannot be found!`})
        return
    }
    users.splice(index,1)
    res.status(204)
    res.redirect('/user')
})

module.exports = router