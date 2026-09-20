const http = require("http")

const server = http.createServer((req,res) =>{
    if(req.url === "/home"){
        res.end("home page")
    }else if(req.url === "/about"){
        res.end("about home")
    }else if(req.url === "contect"){
        res.end("contect page")
    }else{
        res.end("can`t found page")
    }
})
server.listen(3006,()=>{
    console.log("server is string")
})