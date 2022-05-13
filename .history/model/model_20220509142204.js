const mongoose = require("mongose")

const authorSchema = new mongoose.Schema({
    name:{
        type:String
    },
    year:{
        type:Number
    },
    books:[
        {
            type: mongoose.Schema.T
        }
    ]
})

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
let Book = mongoose.model("Book", bookSchema)
module.exports = {Book}