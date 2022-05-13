const authorController = require("../controllers/authorController")

const router = require("express").Router()

ADD
router.post("/", authorController.addAuthor)

module.exports = router