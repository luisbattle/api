var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var orderModel = new mongoose.Schema({
    name : {type:String},
    lastName: {type:String}
},{collection:'orders'});
module.exports= mongoose.model('order',orderModel);
//module.exports = Person;
