const express = require('express')
const routes = express.Router()
const ctrStudent = require('../controllers/studentcontroller')


routes.post('/', (req, resp)=> {
    let {body} = req
    console.log(body)
    let status= 201
    let msg= "New record avaliable"
    let ok = ctrStudent.postStudent(body)
    if(ok === false){
      status = 401,
      msg ="Datos invalidos"
    }
    return resp.status(status).send({
      status: status,
      msg: msg
    })
  })

module.exports = routes