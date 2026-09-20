const express = require("express")
const route = express.Router()
let students =[
    {
        id : 1,
        name : "hardik",
        email : "hardik10.gmail.com",
        age : 22,
        course : "BCA",
        marks : 88
    },
    {
        id : 2,
        name : "sagar",
        email : "sagar10.gmail.com",
        age : 24,
        course : "MCA",
        marks : 99
    }
]

route.get("/students",(req,res) =>{
    res.json(students)
})

route.get("/students/:id",(req,res) => {
    let id = Number(req.params.id)

    let student = students.find(p => p.id === id)
    if(!student){
        return res.status(404).json({
            message : "student not found"
        })
    }

    res.json(student)
})

route.post("/students",(req,res) => {
    let student = {
        id : students.length+1,
        name : req.body.name,
        email : req.body.email,
        age : Number(req.body.age),
        course : req.body.course,
        marks : Number(req.body.marks)
    }
    students.push(student)

    res.status(201).json(student)
})

route.put("/students/:id",(req,res) => {
    let id = Number(req.params.id)

    let student = students.find(s => s.id === id)
    if(!student){
        return res.status(404).json({
            message : "student not found"
        })
    }
    student.name = req.body.name
    student.email = req.body.email
    student.age = Number(req.body.age)
    student.course = req.body.course
    student.marks = Number(req.body.marks)

    res.json(student)
})

route.delete("/students/:id",(req,res) => {
    let id =Number(req.params.id)

    let index = students.findIndex(s => s.id === id)
    if(index === -1){
        return res.status(404).json({
            message : "student not found"
        })
    }
    let deletestudent = students.splice(index,1)

    res.json({
        message : "student was deleted",
        student : deletestudent[0]
    })
})

module.exports=route