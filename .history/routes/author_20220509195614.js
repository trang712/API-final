const authorController = require("../controllers/authorController")

const router = require("express").Router()

router.post("/", authorController.addAuthor)

module.exports = router