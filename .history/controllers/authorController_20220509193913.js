const {Author,Book} = require("../model/model")
const authorController = {
    addAuthor: async(req,res)=>{
        try{
            const newAuthor = new Author(req.body)
            const saveAuthor = await newAuthor.save
        }catch(err){
            res.status(500).json(err)
        }
    }
}
module.exports = authorController