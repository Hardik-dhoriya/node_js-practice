const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    id:{
        type : Number,
        required : true,
        unique : true
    },
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    age : {
        type : Number,
        required : true
    }
})
const students = mongoose.model("students",studentSchema)

module.exports = students