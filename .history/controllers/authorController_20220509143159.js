const {Author,Book} = require("../model/model")
const authorController = {
    addAuthor: async(req,res)=>{
        res.status(200.json(req))
    }
}
module.exports = authorController