const {Author,Book} = require("../model/model")
const authorController = {
    addAuthor: async(req,res)=>{
        try{
            const newAuthor = new Author(req.body)
        }catch(err){
            res.status(500).json(err)
        }
    }
}
module.exports = authorController