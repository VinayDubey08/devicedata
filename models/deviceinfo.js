const mongoose = require('mongoose')


const deviceData = new mongoose.Schema({
    //_id:mongoose.Schema.Types.ObjectId,
    deviceid: String,
    batteryvolt: String,
    solarvolt: String
})

module.exports = mongoose.model('deviceinfo', deviceData)

//module.exports= Deviceinfo;

