const http = require("http")

const server = http.createServer((req,res) =>{
    if(req.method === "POST"){
        res.end("post request received")
    }
    else{
        res.end("not a POST request")
    }
})
server.listen(3004)