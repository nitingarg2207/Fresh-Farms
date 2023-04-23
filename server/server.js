require('dotenv').config()
const express = require('express')

const app = express()
const router = require('./routes')
require('dotenv').config()
const mongoose = require('mongoose')

const DB = process.env.DB

mongoose.connect(DB).then(()=>{
    console.log("connected to database")
}).catch((err)=>{
    console.log(err)
})

const PORT = process.env.PORT || 5500
app.use(express.json())
app.use(router)

app.get('/',(req,res)=>{
    res.send("Hello from express js")
})



app.listen(PORT, ()=>console.log(`Listening on PORT localhost:${PORT}`))