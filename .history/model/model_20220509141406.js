const mongoose = require("mongose")
const bookSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    author:{
        t
    },
    publishedDate:{
        type:String
    },
    genres:{
        type:[String]
    }

})