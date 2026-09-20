const mongoose = require("mongoose")

const carSchema = mongoose.Schema({
    id : {
        type : Number,
        required :true,
        unique : true
    },
    carname : {
        type : String,
        required : true
    },
    brand : {
        type : String,
        required : true
    },
    priceperday : {
        type : Number,
        required :true
    },
    available : {
        type : Boolean,
        required : true
    }

})
const cars = mongoose.model("cars" , carSchema)

module.exports = cars