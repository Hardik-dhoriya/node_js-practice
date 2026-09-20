const express = require("express")
const route = require("./route/product_route.js")

const app = express()
app.use(express.json())

app.use("/" , route)

app.use((req,res) => {
    res.status(404).json({
        message : "route not found"
    })
})

app.listen(5000,()=>{
    console.log("server running on port 5000")
})