const mongoose = require("mongoose")

const connectionDB = async ()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/users1")
        console.log("mongodb is connected")
    }catch(error){
        console.log("mongodb connection error", error.message)
    }
}
module.exports = connectionDB