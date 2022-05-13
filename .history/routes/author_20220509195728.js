const authorController = require("../controllers/authorController")

const router = require("express").Router()

//ADD AUTHOR
router.post("/", authorController.addAuthor)

//GET ALL AUTHORS
router.get("/", au)
module.exports = router