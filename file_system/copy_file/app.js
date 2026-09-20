const fs = require("fs")

fs.copyFileSync("test.txt","copy.txt")
console.log("file was copyed")