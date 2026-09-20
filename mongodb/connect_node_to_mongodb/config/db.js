const mongoose = require("mongoose")

const connectDB = async () => {
    try{
        await mongoose.connect("mongodb://localhost:27017/mybd")

        console.log("Mongodb connection")
    }
    catch(error){
        console.log("Mongodb connection error:" ,error.message)
        process.exit(1)
    }
}
module.exports = connectDB