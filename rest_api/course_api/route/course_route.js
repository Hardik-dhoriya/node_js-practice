const express = require("express")
const route = express.Router()
let courses = [
    {
        id : 1,
        name : "BCA",
        duration : "3 year",
        price : 150000,
        instructor : "hardik"
    },
    {
        id : 2,
        name : "MCA",
        duration : "2 year",
        price : 250000,
        instructor : "sagar"
    }
]

route.get("/courses",(req,res) => {
    res.json(courses)
})

route.get("/courses/:id",(req,res) => {
    let id = Number(req.params.id)

    let course = courses.find(c => c.id === id)
    if(!course){
        return res.status(404).json({
            message : "that course not found"
        })
    }

    res.json(course)
})

route.post("/courses",(req,res) => {
    let course = {
        id : courses.length+1,
        name : req.body.name,
        duration : req.body.duration,
        price : Number(req.body.price),
        instructor : req.body.instructor
    }

    courses.push(course)

    res.json(course)
})

route.put("/courses/:id" ,(req,res) => {
    let id = Number(req.params.id)
    let course = courses.find(c => c.id === id)
    if(!course){
        return res.status(404).json({
            message : "that couser not found"
        })
    }

    course.name = req.body.name
    course.duration = req.body.duration
    course.price = Number(req.body.price)
    course.instructor = req.body.instructor

    res.status(201).json(course)
})

route.delete("/courses/:id",(req,res) => {
    let id = Number(req.body.id)

    let index = courses.findIndex(c => c.id === id)

    if(index === -1){
        return res.status(404).json({
            message : "course not found"
        })
    }
    let deletecourse = courses.splice(index , 1)

    res.json({
        message : "course was deleted",
        course : deletecourse[0]
    })

})

module.exports = route