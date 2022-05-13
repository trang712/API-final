const authorController = require("../controllers/authorController")

const router = require("express").Router()

//ADD AUTHOR
router.post("/", authorController.addAuthor)

//GET ALL AUTHORS
router.get("/", authorController.getAllAuthors)

//GET AN AUTHOR
router.get("/:id", authorController.getAnAuthor)

//UPDATE AUTHOR
router.put("/:id", authorController.updateAuthor)


module.exports = router