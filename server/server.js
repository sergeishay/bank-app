const express = require("express")
const mongoose = require("mongoose")
const path = require("path")
const router = require("./routes/api")

const app = express()
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})

app.use(express.json())
app.use(express.urlencoded({extended:false}))
mongoose.connect("mongodb://localhost/Bank", { useNewUrlParser: true, useUnifiedTopology: true })


app.use( '/', router)



app.listen(3003 , ()=>{
    console.log("listen to 3003")
})