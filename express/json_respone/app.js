const express = require("express")

const app=express()

app.get("/user" , (req,res) => {
    let user = {
        name : "hardik",
        age : 22,
        couse : "MCA"
    }
    res.json(user)
})
app.listen(3000,()=> {
    console.log("server is running on 3000")
})