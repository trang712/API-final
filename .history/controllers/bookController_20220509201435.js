const{Book, Author} = require("../model/model")

const bookController = {
    //ADD A BOOK
    addaBook: async(req,res)=>{
        try{
            const newBook = new Book(req.body)
            const saveBook = 
        }catch(err){
            res.status(500).json(err)
        }
    }
}
module.exports = bookController