let { URL} = require("url")

let myurl = new URL("https://example.com/products?id=10")

console.log("protocol =>",myurl.protocol)
console.log("host name =>", myurl.hostname)
console.log("query =>", myurl.search)