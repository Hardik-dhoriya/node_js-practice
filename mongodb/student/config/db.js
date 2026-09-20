const mongoose = require("mongoose")

const connectionDB = async() => {
    try{
        await mongoose.connect("mongodb://localhost:27017/students")
        console.log("mongodb connected")
    }catch(error){
        console.log("mongodb connection error" , error.message)
    }
}

module.exports=connectionDB 