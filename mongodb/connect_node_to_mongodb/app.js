const express = require("express")
const connectDB = require("./config/db")

const app = express()

connectDB();

app.use(express.json())

app.listen(4000,() => {
    console.log("server running on port 4000")
})