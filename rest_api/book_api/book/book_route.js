const express = require("express")
const route = express.Router();

let books = [
    {
        id : 1,
        title : "java",
        author : "hardik",
        price : 1000,
        category : "coding",
        availble : "yes"
    },
    {
        id : 2,
        title : "c++",
        author : "sagar",
        price : 1500,
        category : "coding",
        availble : "no"
    }
]

route.get("/books" , (req,res) => {
    res.json(books)
})

route.get("/books/:id" , (req,res) => {
    let id = Number(req.params.id)

    let book = books.find(b => b.id === id)
    if(!book){
        return res.status(404).json({
            message : "book not found"
        })
    }
    res.json(book)
})

route.post("/books",(req,res) => {
    let book = {
        id : books.length+1,
        title : req.body.title,
        author : req.body.author,
        price : Number(req.body.price),
        category : req.body.category,
        availble : req.body.availble
    }

    books.push(book)
    res.status(201).json(book)
})

route.put("/books/:id",(req,res) => {
    let id = Number(req.params.id)

    let book = books.find(b => b.id === id)
    if(!book){
        return res.status(404).json({
            message : "book not found"
        })
    }
    book.title = req.body.title
    book.author = req.body.author
    book.price = Number(req.body.price)
    book.category = req.body.category
    book.availble = req.body.availble

    res.json(book)
})

route.delete("/books/:id" ,(req,res) => {
    let id = Number(req.params.id)

    let index = books.findIndex(b => b.id === id)
    if(index === -1){
        return res.status(404).json({
            message : "book not found"
        })
    }
    let deletebook = books.splice(index , 1)

    res.json({
        message : "book was deleted",
        book :deletebook[0]
    })
})

module.exports = route