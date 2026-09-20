const express = require("express")

const route = express.Router()

let products = [
    {
        id: 1,
        name: "Laptop",
        price: 50000,
        category: "Electronics",
        stock: 10
    },
    {
        id: 2,
        name: "Mobile",
        price: 20000,
        category: "Electronics",
        stock: 20
    }
]

route.get("/products",(req,res) => {
    res.json(products)
})

route.get("/products/:id",(req,res) => {
    let id = Number(req.params.id)

    let Product = products.find(p => p.id === id)
    if(!Product){
        return res.status(404).json({
            message : "product not found"
        })
    }

    res.json(Product)
})

route.post("/products" , (req,res) => {
    let product = {
        id : products.length+1,
        name : req.body.name,
        price  : req.body.price,
        category : req.body.cotegory,
        stock : req.body.stock
    }

    products.push(product)
    res.status(201).json(product)
})

route.put("/products/:id",(req,res) => {
    let id = Number(req.params.id)

    let product = products.find(p => p.id === id)
    if(!product){
        return res.status(404).json({
            message : "product not found"
        })
    }
    product.name = req.body.name
    product.price = req.body.price
    product.category = req.body.category
    product.stock = req.body.stock
    
    res.json(product)
})

route.delete("/products/:id",(req,res) =>{
    let id = Number(req.params.id)

    let index = products.findIndex((p) => p.id === id)
    if(index === -1){
        return res.status(404).json({
            message : "product not found"
        })
    }
    let deletedProduct = products.splice(index,1)

    res.json({
        message : "prodect was deleted",
        product : deletedProduct[0]
    })
})
module.exports = route