const express = require("express")
const route = express.Router()

let cars = [
    {
        id: 1,
        carName: "Creta",
        brand: "Hyundai",
        pricePerDay: 2500,
        fuelType: "Petrol",
        available: true
    },
    {
        id: 2,
        carName: "Nexon",
        brand: "Tata",
        pricePerDay: 2000,
        fuelType: "Diesel",
        available: false
    }
];

route.get("/cars" , (req,res) => {
    res.json(cars)
})

route.get("/cars/:id",(req,res) => {
    let id = Number(req.params.id)
    let car = cars.find(c => c.id === id)
    if(!car){
        return res.status(404).json({
            messgae : "car not found"
        })
    }

    res.json(car)
})

route.post("/cars" ,(req,res) => {
    let car = {
        id : cars.length+1,
        carName : req.body.carName,
        brand : req.body.brand,
        pricePerDay : Number(req.body.pricePerDay),
        fuelType : req.body.fuelType,
        available : Boolean(req.body.available)
    }

    cars.push(car)

    res.json(car)
})

route.put("/cars/:id",(req,res) => {
    let id = Number(req.params.id)
    let car = cars.find(c => c.id === id)
    if(!car) {
        return res.status(404).json({
            messgae : "car not found"
        })
    }

    car.carName = req.body.carName
    car.brand = req.body.brand
    car.pricePerDay = Number(req.body.pricePerDay)
    car.fuelType = req.body.fuelType
    car.available = Boolean(req.body.available)

    res.json(car)
})

route.delete("/cars/:id" , (req,res) => {
    let id =Number(req.params.id)
    let index = cars.findIndex(c => c.id === id)
    if(index === -1){
        return res.status(404).json({
            messgae : "car not found"
        })
    }
    let deletecar = cars.findIndex(index , 1)

    res.json({
        messgae : "car deleted",
        car : deletecar
    })
})

module.exports = route