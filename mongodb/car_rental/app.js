const express = require("express")
const connectionDB = require("./config/db")
const cars = require("./router/car_route.js")


const app = express()
app.use(express.json())

connectionDB()

app.use("/",cars)

app.use((req,res) => {
    res.status(404).json({
        message : "route not found"
    })
})

app.listen(6000,() => {
    console.log("server was running on port 6000")
})