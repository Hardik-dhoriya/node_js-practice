const express = require("express")
const users = require("./router/user_route") 

const app = express()

app.use(express.json())

app.use("/",users)
app.use((req,res) => {
    res.status(404).json({
        message : "Route not found"
    })
})

app.listen(4000,() =>{
    console.log("server is running on 4000")
})