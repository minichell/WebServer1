
const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const Person = mongoose.model('person', personSchema);

exports.createPerson = (name, email, age) => {
    var person = new Person({
    name: name,
    email: email,
    age: age
})

return Person

}
