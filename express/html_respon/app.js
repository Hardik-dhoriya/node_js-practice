const express = require("express")

const app = express()

app.get("/",(req,res) =>{
    res.send(`
        <h1>Welcome to Home Page</h1>
        <p>This is an Express server.</p>
        `)
})
app.listen(3000,()=>{
    console.log("server is running on 3000")
})