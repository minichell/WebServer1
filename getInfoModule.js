const mongoose = require('mongoose');

const getInfoSchema = new mongoose.Schema({
    name: String,
    text: String
})

const GetInfo = mongoose.model('GetInfo', getInfoSchema);

exports.createGetInfo = (name, text) => {
    var getInfo = new GetInfo({
        name: name,
        text: text
    });
    return getInfo;
}

exports.getAllInfo = async() => {
    var getInfo = await GetInfo.find({});

    return getInfo;
}