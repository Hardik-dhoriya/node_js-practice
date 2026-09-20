const express = require("express")
const connecttionDB = require("./config/db")
const student = require("./router/student_route")


const app = express()
app.use(express.json())

connecttionDB()

app.use("/",student)

app.use((req,res) => {
    res.status(404).json({
        message : "route not found"
    })
})

app.listen(8000,() => {
    console.log("server running on port 8000")
})
