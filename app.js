const express = require('express')
const mongoose = require('mongoose')
const infoModel = require('./infoModel')
const Module = require ('./Module')
const getInfoModule = require ('./getInfoModule')
const app = express()
const port = 3000
const clientDir = __dirname + "\\client\\"

app.use(express.json())
app.use(express.urlencoded())
app.use (express.static(clientDir))

app.get('/', (req, res) => {
    res.render(clientDir + "index.ejs")
})

app.get('/message', async (req, res) => {
    var getInfos = await getInfoModel.createGetInfos()
    res.render (clientDir +"message.ejs", {getInfo: getInfos})
})

app.set('view engine', 'ejs')

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

 app.post ('./message', async (req, res) => {
     var getInfo = getInfoModel.createGetInfos(req.body.email, req.body.text);
    Module.storePerson(getInfo);

    var getInfos = await getInfoModel.createGetInfos()

     res.render(clientDir + "message.ejs", {getInfo: getInfos});

     
 })


app.listen(port,() => console.log(`Example app listening on port port!`))