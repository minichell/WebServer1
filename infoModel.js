const mongoose = require ('mongoose');

const infoSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
    
})

const Info = mongoose.model('Info', infoSchema);

exports.storeInfo = (name, email, age) => {
    var info = new Info({
        name: name,
        email: email,
        age: age
       
    });

    return info;
}
  