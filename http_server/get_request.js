const http = require("http")

let server = http.createServer((req,res)=>{
    if(req.method === "GET"){
        res.end("GET request received")
    }else{
        res.end("other request")
    }
})
server.listen(3003,()=>{
    console.log("server string")
})