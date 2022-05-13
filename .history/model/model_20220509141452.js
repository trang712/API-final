const mongoose = require("mongose")
const bookSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    author:{
        type:mongoose.Schema
    },
    publishedDate:{
        type:String
    },
    genres:{
        type:[String]
    }

})