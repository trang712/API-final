const express = require("express")
const cors = require("cors")
const app = express()
const mongoose = require("mongoose")
var bodyParser = require("body-parser")
const morgan = require("morgan")
const dotenv = require("dotenv")

app.use(bodyParser.json({limit:"50mb"}))
app.use(cors())
app.use(morgan("common"))

app.get("/api",(req,res)=>{
    
})

app.listen(3000, () => {
    console.log("server is running")
})