const express = require("express")
const course = require("./route/course_route")
const app = express()
app.use(express.json())

app.use("/",course)

app.use((req,res ) => {
    res.status(404).json({
        message : "route not found"
    })
})

app.listen(8000,()=>{
    console.log("server is running on port 8000")
})