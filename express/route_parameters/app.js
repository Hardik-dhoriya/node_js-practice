const express = require("express")

const app = express()

app.get("/user/:id",(req,res) =>{
    console.log(req.params)
    res.send("User ID :" + req.params.id)
})
app.listen(3006,()=>{
    console.log("server is running on port 3006")
})