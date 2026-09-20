const express = require("express")

const app = express()
app.use(express.json())
let products = [
    {
        id : 1 ,
        name : "leptop",
        price : 50000
    },
    {
        id : 2 ,
        name : "mobile",
        price : 20000
    }
]

app.get("/products",(req,res) => { 
    res.json(products)
})

app.get("/products/:id" , (req,res) => {
    let id = Number(req.params.id)

    let product = products.find(p => p.id === id)
    if(!product){
        return res.status(404).json({
            message : "product not found "
        })
    }
    res.json(product)
})

app.post("/products" , (req,res) =>{
    let product = {
        id : products.length+1,
        name : req.body.name,
        price : req.body.price
    }
    products.push(product)

    res.status.apply(201).json({product})
})

app.put("products/:id" , (req,res) =>{
    let id = Number(req.body.id)

    let product = products.find(p => p.id === id)

    if(!product){
        return res.status(404).json({message : "product was not found"})
    }

    product.name = req.body.name
    product.price = req.body.price

    res.json(product)
})

app.delete("products/:id" , (req,res) => {
    let id = Number(req.params.id)

    let index = products.findIndex(p => p.id === id)

    if(index === -1){
        return res.status(404).json({
            message : "product not found"
        })
    }
    let deletedProduct = products.splice(index, 1);

    res.json({
        message: "Product deleted",
        product: deletedProduct[0]
    });
})

app.use((req, res) => {

    res.status(404).json({
        message: "Route not found"
    });

});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});