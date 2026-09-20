const express = require("express")
const book = require("./book/book_route")
const app = express()

app.use(express.json())
app.use("/",book)

app.use((req,res) => {
    res.status(404).json({
        message : "route not found"
    })
})

app.listen(8000,() => {
    console.log("server running on port 8000")
})