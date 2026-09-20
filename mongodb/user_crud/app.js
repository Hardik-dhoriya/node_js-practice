const express = require("express")
const conncetDB = require("./config/db")
const users = require("./route/user")
const connectDB = require("../connect_node_to_mongodb/config/db")

const app = express()
app.use(express.json())

conncetDB();

app.use("/",users)

app.use((req,res) => {
    res.status(404).json({
        message : "route not found"
    })
})
app.listen(5000,() => {
    console.log("server running on port 5000")
})
