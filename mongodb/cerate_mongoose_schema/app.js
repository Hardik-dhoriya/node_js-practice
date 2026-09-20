const express =require("express")
const app = express()
const connectDB = require("./config/db")
const user = require("./model/user")

app.use(express.json())

connectDB()

app.listen(1000 ,() => {
    console.log("server in running on port 1000")
})