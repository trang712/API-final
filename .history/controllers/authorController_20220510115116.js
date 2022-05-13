const res = require("express/lib/response")
const {Author,Book} = require("../model/model")
const authorController = {
    //ADD AUTHOR
    addAuthor: async(req,res)=>{
        try{
            const newAuthor = new Author(req.body)
            const saveAuthor = await newAuthor.save()
            res.status(200).json(saveAuthor)
        }catch(err){
            res.status(500).json(err)
        }
    },

    //GET ALL AUTHORS
    getAllAuthors: async(req,res)=>{
        try{
            const authors = await Author.find()
            res.status(200).json(authors)
        }catch(err){
            res.status(500).json(err)
        }
    },

    //GET AN AUTHOR
    getAnAuthor: async(req,res) => {
        try{
            const author = await Author.findById(req.params.id).populate("books")
            res.status(200).json(author)
        }catch(err){
            res.status(500).json(err)
        }
    },

    //UPDATE AUTHOR
    updateAuthor:async(req,res) =>{
        try{
            const author = await Author.findById(req.params.id)
            await author.update
        }catch(err){
            res.status(500).json(err)
        }
    }
}
module.exports = authorController