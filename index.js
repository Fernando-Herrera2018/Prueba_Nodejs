const express = require('express')
const bodyParser = require('body-parser')
const student = require('./routes/students')
const server = express()
require('dotenv').config()

server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())

server.use('/student', student)

server.listen(process.env.PORT, ()=>{
    console.log(`Server start in the port ${process.env.PORT}`)
})

