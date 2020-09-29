const express = require('express')
const app = express()
const port = 3000
const clientDir = __dirname + "\\client\\"

//MONGODB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', function() {
    //
});

const personSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

personSchema.methods.speak = () => {
    console.log("cool");
    conssole.log("The name is " + this.name);

}

const Person = mongoose.model('person', personSchema);
// END OF MONGODB


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
   console.log(req.body.name) 
   console.log(req.body.email)
   console.log(req.body.age)
   const person = new Person ({name: req.body.name, email: req.body.email, age: req.body.age});
   person.save()
   res.redirect('/')
})



app.listen(port,() => console.log(`Example app listening on port port!`))