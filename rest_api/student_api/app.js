const express = require("express")
const student = require("./student_route/student_route.js")

const app = express()
app.use(express.json())

app.use("/" , student)

app.use((req,res) => {
    res.status(404).json({
        message : "route not found"
    })
})

app.listen(6000,() =>{
    console.log("server running on port 6000")
})