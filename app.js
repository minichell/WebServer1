const express = require('express')
const mongoose = require('mongoose')
const infoModel = require('./infoModel')
const Module = require ('./Module')
const getInfoModule = require ('./getInfoModule')
const app = express()
const port = 3000
const clientDir = __dirname + "\\client\\"

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use (express.static(clientDir))
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.render("pages/index.ejs")
})

app.get('/message', async (req, res) => {
    let message = await getInfoModule.getAllInfo();
    res.render("pages/message.ejs", {getInfo: message})
})




/*app.post('/', (req, res) => {
     Module.storePerson(infoModel.storeInfo(req.body.name, req.body.email, req.body.age))

    res.render('/')
 })*/

 app.post ('/message', async (req, res) => {
     var getInfo = getInfoModule.createGetInfo(req.body.email, req.body.message);
    Module.storePerson(getInfo);

    var getInfos = await getInfoModule.getAllInfo();

     res.render('pages/message.ejs', {getInfo: getInfos});
 })


app.listen(port,() => console.log(`Example app listening on port port!`))