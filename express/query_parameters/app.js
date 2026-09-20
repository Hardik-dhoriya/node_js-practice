const express = require("express")
const app = express()

app.get("/search" , (req,res) => {
    let name = req.query.name
    let age = req.query.age

    res.json({
        name : name , 
        age :age
    })
})
app.listen(3010,() =>{
    console.log("server is running on port 3010")
})