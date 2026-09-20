const fs = require("fs")

fs.writeFile("test.txt","hii my name is hardik",function(err){
    if(err){
        console.log(err)
        return;
    }
    console.log("file was created")
})