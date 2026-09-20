const express = require("express")

const app = express()
app.use(express.json())

app.get("/",(req,res) => {
    res.send("home page")
})

app.get("/about",(req,res) =>{
    res.send("about page")
})
app.get("/contact",(req,res) =>{
    res.send("contact page")
})
app.post("/products" , (req,res) => {
    res.json([
        {id:1 , name:"laptop"},
        {id:2 , name :"modile"}
    ])
})
app.listen(3000,()=>{
    console.log("server is running on port 3000")
})