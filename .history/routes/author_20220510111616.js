const authorController = require("../controllers/authorController")

const router = require("express").Router()

//ADD AUTHOR
router.post("/", authorController.addAuthor)

//GET ALL AUTHORS
router.get("/", authorController.getAllAuthors)

//GET AN AUTHOR
router.get("/:id", authorController)
module.exports = router