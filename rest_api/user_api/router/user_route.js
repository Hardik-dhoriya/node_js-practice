const express = require("express")

const route = express.Router()

let users = [
    {
        id : 1,
        name : "hardik",
        email : "hardik.10.email.com",
        age : 22,
        city : "botad"
    },
    {
        id : 2,
        name : "sagar",
        email : "sagar.10.email.com",
        age : 25,
        city : "botad"
    }
]

route.get("/users",(req,res) =>{
    try{
        res.send(users)

    }
    catch(err){
        res.status(500).json({
            message : message.err
        })
    }
})

route.get("/users/:id" , (req,res) => {
    let id = Number(req.params.id)

    let user = users.find(u => u.id === id)

    if(!user){
        res.status(404).json({
            message : "user not found"
        })
    }
    res.json(user)


})

route.post("/users" , (req,res) =>{
    let user = {
        id : users.length+1,
        name : req.body.name,
        email : req.body.email,
        age : Number(req.body.age),
        city : req.body.city
    }

    users.push(user)

    res.status(201).json(user)
})


route.put("/user/:id",(req,res) =>{
    let id = Number(req.params.id)

    let user = users.find(u =>u.id === id)

    if(!user){
        res.status(404).json({
            message : "user not f0und"
        })
    }
    user.name = req.body.name
    user.email = req.body.email
    user.age  = Number(req.body.age)
    user.city = req.body.city

    users.push.apply(user)
})

route.delete("/user/:id" , (req,res) => {
    let id = Number(req.params.id)

    let index = users.find(u => u.id === id)

    if(index === -1){
        return res.status(404).json({
            message : "user not found"
        })
    }

    let deleteuser = users.splice(index , 1)
    res.json({
        message : "user deleted" ,
        users : deleteuser[0] 
    })
})

module.exports= route