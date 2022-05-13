const authorController = require("../controllers/authorController")

const router = require("express").Router()

a
router.post("/", authorController.addAuthor)

module.exports = router