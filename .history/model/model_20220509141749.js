const mongoose = require("mongose")
const bookSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Author"
    },
    publishedDate:{
        type:String
    },
    genres:{
        type:[String]
    }

})
let Book = mongoose.model