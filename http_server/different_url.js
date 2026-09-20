const http = require("http")

const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.end("Home page")
    }else if(req.url === "/about"){
        res.end("about page")
    }
})
server.listen(3002,()=>{
    console.log("server string")
})