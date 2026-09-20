const express = require("express")
const route = express.Router()

let hotels = [
    {
        id: 1,
        name: "Taj Hotel",
        location: "Ahmedabad",
        roomType: "Deluxe",
        price: 5000,
        available: true
    },
    {
        id: 2,
        name: "Hotel Royal",
        location: "Rajkot",
        roomType: "Suite",
        price: 3500,
        available: false
    }
]

route.get("/hotels" , (req,res) =>{
    res.json(hotels)
})

route.get("/hotels/:id",(req,res) => {
    let id = Number(req.params.id)
    let hotel = hotels.find(h=>h.id === id)
    if(!hotel){
        return res.status(404).json({
            message : "hotel not found"
        })
    }
    res.json(hotel)
} )

route.post("/hotels",(req,res) => {
    let hotel = {
        id : hotels.length+1,
        name : req.body.name,
        location : req.body.location,
        roomType : req.body.roomType,
        price : Number(req.body.price),
        available : Boolean(req.body.available)
    }

    hotels.push(hotel)

    res.status(201).json(hotel)
})

route.put("/hotels/:id",(req,res) =>{
    let id = Number(req.params.id)
    let hotel = hotels.find(h => h.id === id)
    if(!hotel){
        return res.status(404).json({
            message : "hotel not found"
        })
    }

    hotel.name = req.body.name
    hotel.location = req.body.location
    hotel.roomType = req.body.roomType
    hotel.price = Number(req.body.price)
    hotel.available = Boolean(req.body.available)

    res.json(hotel)
})

route.delete("/hotels/:id",(req,res) =>{
    let id = Number(req.params.id)
    let index = hotels.findIndex(h => h.id === id)
    if(index === -1){
        return res.status(404).json({
            message : "hotel not found"
        })
    }

    let deletehotel = hotels.splice(index , 1)

    res.json({
        message : "hotel deleted",
        hotel : deletehotel[0]
    })
})

module.exports = route