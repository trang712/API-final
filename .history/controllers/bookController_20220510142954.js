const{Book, Author} = require("../model/model")

const bookController = {
    //ADD A BOOK
    addaBook: async(req,res)=>{
        try{
            const newBook = new Book(req.body)
            const saveBook = await newBook.save()
            if(req.body.author){
                const author = Author.findById(req.body.author)
                await author.updateOne({$push: {books: saveBook._id}})
            }
            res.status(200).json(saveBook)
        }catch(err){
            res.status(500).json(err)
        }
    },

    //GET ALL BOOKS
    getAllBooks: async(req,res)=>{
        try{
            const allBooks = await Book.find()
            res.status(200).json(allBooks)
        }catch(err){
            res.status(500).json(err)
        }
    },

    //GET A BOOK
    getABook: async(req,res)=>{
        try{
            const book = await Book.findById(req.params.id).populate("author")
            res.status(200).json(book)
        }catch(err){
            res.status(500).json(err)
        }
    },

    //UPDATE BOOK
    updateBook:async(req,res) =>{
        try{
            const book = await Book.findById(req.params.id)
            await book.updateOne({$set: req.body})
            res.status(200).json("updated successfully!")
        }catch(err){
            res.status(500).json(err)
        }
    },

    //DELETE BOOK
    deleteBook:async(req,res)=>{
        try{
            
        }catch(err){
            res.status(500).json(err)
        }
    }
}
module.exports = bookController