const express = require("express")
const cors = require("cors")
const app = express()
const mongoose = require("mongoose")
var bodyParser = require("body-parser")
const morgan = require("morgan")
const dotenv = require("dotenv")
const authorRoute = require("./routes/author")
const bookRoute = require("./routes/book")

dotenv.config()
mongoose.connect((process.env.MongoDB_url), () =>{
    console.log("connected to MongoDB")
})

app.use(bodyParser.json({limit:"50mb"}))
app.use(cors())
app.use(morgan("common"))

app.use("/api/author", authorRoute)
app.use("/api/book", authorRoute)


app.listen(3000, () => {
    console.log("server is running at localhost 3000")
})