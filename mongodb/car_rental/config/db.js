const mongoose = require("mongoose")

const connectionDB = async ( ) => {
    try{
        await mongoose.connect("mongodb://localhost:27017/car_rental")
        console.log("mongodb was connected")
    }
    catch(error){
        console.log("mongodb concextion error ", error.message)
    }
}

module.exports = connectionDB