const express = require("express")

const app = express()
app.post("/user" , (req,res) =>{
    res.end("post request received")
})
app.put("/users/:id",(req,res) =>{
    res.end("user update")
})
app.delete("users/:id",(req,res)=>{
    res.end("user deleted")
})

app.listen(3000,()=>{
    console.log("server running on 3000")
})