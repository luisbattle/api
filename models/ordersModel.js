var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var orderModel = new mongoose.Schema({
    person : {
        idCliente : String,
        name : String,
        lastName : String,
        Orders : {
            typeOfAuthorization : String,
            dateOfOrder : String,
            amount : String,
            detail : String,
            approved : Boolean , default: false
        },
        versionKey: false
    }
},{collection:'orders'});
module.exports= mongoose.model('order',orderModel);
