const fs = require("fs")

if(fs.existsSync("test.txt")){
    console.log("file was exists")
}else{
    console.log("file is not exists")
}