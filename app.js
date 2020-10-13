const express = require('express')
const mongoose = require('mongoose')
const infoModel = require('./infoModel')
const Module = require ('./Module')
const app = express()
const port = 3000
const clientDir = __dirname + "\\client\\"

app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req, res) => res.sendFile(clientDir + "index.html"))

app.get('/bajs', (req, res) => {
    res.sendFile(clientDir + "style.css")
})

app.get('/theBaddest', (req, res) => {
    res.sendFile(clientDir + "Kda.jpg")
})

app.post('/', (req, res) => {
     Module.storePerson(infoModel.storeInfo(req.body.name, req.body.email, req.body.age))

    res.redirect('/')
 })

app.listen(port,() => console.log(`Example app listening on port port!`))