const mongoose = require("mongoose")

const connectionDB = async () => {
    try{
        mongoose.connect("mongodb://localhost:27017/user")
        console.log("mongodb was connected")
    }
    catch(error){
        console.log("mongodb connection error", message.error)

    }
}
module.exports = connectionDB
