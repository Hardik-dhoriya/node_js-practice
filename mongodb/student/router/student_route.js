const students = require("../router/student_route")

const express = require("express")
const route = express.Router()

route.get("/students" , async(req,res) => {
    try{
        const allstudent = await students.find()

        res.status(200).json(allstudent)

    }catch(error){
        res.status(500).json({
            message : error.message
        })
    }
})

route.get("/students/:id",async(req,res) => {
    try{
        const student =await students.findOne({
            id :Number(req.params.id)
        })

        if(!student){
            return res.status(404).json({
                message : "student not found"
            })
        }
        res.status(200).json(student)
    }catch(error){
        res.status(500).json({
            message : error.message
        })
    }
})

route.post("/students",async(req,res) => {
    try{
        const laststudent = await students.findOne().sort({ id : -1})
        const newid = laststudent ? laststudent.id+1 : 1 ; 

        const student =await students.create({
            id : newid,
            ...req.body
        })
        res.status(201).json({
            message : "student was created",
            student : student
        })
    }catch(error){
        res.status(500).json({
            message : error.message
        })
    }
})

route.put("/students/:id",async(req,res) => {
    try{
        const student = await students.findOneAndUpdate(
            {id :Number(req.params.id)},
            req.body,
            {
                new : true,
                runValidators : true
            }
        )
        if(!student){
            return res.status(404).json({
                message : "student not found"
            })
        }
        res.status(200).json({
            message : "student updated successfully",
            student : student
        })

    }catch(error){
        res.status(500).json({
            message : error.message
        })
    }
})

route.delete("/students/:id",async(req,res) => {
    try{
        const student = await students.findOneAndDelete({
            id : Number(req.params.id)
        })
        if(!student){
            return res.status(404).json({
                message : "student not found"
            })
        }
        res.status(200).json({
            message : "student was deleted successfully",
            student : student
        })
    }catch(error){
        res.status(500).json({
            message : error.message
        })
    }
})

module.exports = route