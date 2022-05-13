const authorController = require("../controllers/authorController")

const router = require("express").Router()

//Â
router.post("/", authorController.addAuthor)

module.exports = router