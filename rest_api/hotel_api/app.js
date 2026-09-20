const express = require("express")
const hotel = require("./route/hotel")
const app = express()
app.use(express.json())

app.use("/",hotel)

app.use((req,res) => {
    res.status(404).json({
        message : "route not found"
    })
})

app.listen(9000,() => {
    console.log("server is running on port 9000")
})
