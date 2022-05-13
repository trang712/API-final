const express = require("express")
const cors = require("cors")
const app = express()
const mongoose = require("mongoose")
var bodyParser = require("body-parser")
const morgan = require("morgan")
const dotenv = require("dotenv")

mongoose.connect((process.env.Mongo), () =>{
    console.log("connected to MongoDB")
})

app.use(bodyParser.json({limit:"50mb"}))
app.use(cors())
app.use(morgan("common"))



app.listen(3000, () => {
    console.log("server is running")
})