const express = require("express")
const employee = require("./route/employee")
const app = express()
app.use(express.json())

app.use("/",employee)

app.use((req,res) => {
    res.status(404).json({
        message : "route not found"
    })
})

app.listen(7000,()=>{
    console.log("server running no port 7000")
})