const express = require("express")
const route = express.Router()
let employees = [
    {
        id : 1,
        name : "hardik",
        email : "hardik10.gmail.com",
        department : "mern stack",
        salary : 5000,
        city : "botad"
    },
    {
        id : 2,
        name : "sagar",
        email : "sagar10.gmail.com",
        department : "mern stack",
        salary : 50000,
        city : "botad"
    }
]

route.get("/employees" , (req,res) => {
    res.json(employees)
})

route.get("/employees/:id" ,(req,res) => {
    let id = Number(req.params.id)

    let employee = employees.find(e => e.id === id)

    if(!employee){
        return res.status(404).json({
            messgae : "employee not found"
        })
    }
    res.json(employee)
})

route.post("/employees",(req,res) => {
    let employee = {
        id : employees.length+1,
        name : req.body.name,
        email : req.body.email,
        department : req.body.department,
        salary : Number(req.body.salary),
        city : req.body.city
    }

    employees.push(employee)
    res.status(201).json(employee)
})

route.put("/employee/:id",(req,res) =>{
    let id = Number(req.params.id)

    let employee = employees.find(e => e.id === id )
    if(!employee){
        return res.status(404).json({
            message : "employee not found"
        })
    }

    employee.name = req.body.name
    employee.email = req.body.email
    employee.department = req.body.department
    employee.salary = Number(req.body.salary)
    employee.city = req.body.city

    res.json(employee)
})

route.delete("/employees/:id",(req,res) => {
    let id = Number(req.body.id)

    let index = employees.findIndex(e => e.id === id)

    if(index === -1){
        return res.status(404).json({
            message : "employee not found"
        })
    }
    let deleteemployee = employees.splice(index ,1)

    res.json({
        message : "employee deleted",
        employee : deleteemployee[0]
    })

})
module.exports = route