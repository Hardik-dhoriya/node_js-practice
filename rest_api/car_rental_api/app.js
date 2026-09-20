const express = require("express")
const car = require("./route/car")

const app = express()
app.use(express.json())

app.use("/",car)

app.use((req,res) => {
    res.status(404).json({
        message : "route not found"
    })
})

app.listen(5000,() => {
    console.log("server running on port 5000")
})