const express = require ("express")
const route = express.Router()

const cars = require("../model/car")

route.get("/cars" , async (req,res ) => {
    try{
        const car = await cars.find()
        if(!car){
            return res.status(404).json({
                message : "car not found"
            })
        }
        res.status(200).json(car)

    }catch(error){
        res.status(500).json({
            message : error.message
        })
    }
})

route.get("/cars/:id" , async(req,res) => {
    try{
        const car = await cars.findById(req.params.id)

        if(!car) {
            return res.status(404).json({
                message : "car not fount"
            })
        }

        res.status(200).json(car)

    }catch(error){
        res.status(500).json({
            message : error.message
        })
    }
})

route.post("/cars" , async(req,res) => {
    try{
        const lastcar = await cars.findOne().sort({ id: -1 })
        const newid = lastcar ? lastcar.id+1 : 1 

        const car = await cars.create({
            id : newid,
            ...req.body
        })

        res.status(201).json({
            message : "car was created successfully",
            car : car
        })

    }catch(error){
        res.status(500).json({
            message : error.message
        })
    }
})

route.put("/cars/:id" , async(req,res) => {
    try{const car = await cars.findByIdAndUpdate(
        req.params.id,  
        req.body,
        {
            new :true,
            runvaildator : true
        }
    )
    if(!car){
        return res.status(404).json({
            message : "car not found"
        })
    }
    res.status(200).json({
        message : "car was successfully upadted",
        car : car
    })
}
    catch(error){
        res.status(500).json({
            message : error.message
        })
    }
})

route.delete("/cars/:id" , async(req,res) =>{
    try{
        const car = await cars.findByIdAndDelete(req.params.id)

        if(!car){
            return res.status(404).json({
                message : "car was not found"
            })
        }
    }catch(error){
        res.status(500).json({
            message : error.message
        })
    }
} )

module.exports = route