let path = require("path")

let filepath = "/home/user/project/app.js"

console.log("Directory => " , path.dirname(filepath))
console.log("file => ",path.basename(filepath))
console.log("extension => " , path.extname(filepath))