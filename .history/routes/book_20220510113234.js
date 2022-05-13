const bookController = require("../controllers/bookController")

const router = require("express").Router()
//ADD A BOOK
router.post("/", bookController.addaBook)
//GET ALL BOOKS
router.get("/", bookController.getAllBooks)
//
module.exports = router