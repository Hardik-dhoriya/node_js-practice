const http = require("http")

const server = http.createServer((req,res) =>{
    let data = {
        name : "hardik",
        age : 22,
        course : "MCA"
    }
    res.writeHead(200,{
        "Content-Type": "application/json"
    })
    res.end(JSON.stringify(data))
})
server.listen(3005,()=>{
    console.log("server is string")
})