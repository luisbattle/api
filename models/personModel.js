var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var personsModel = new mongoose.Schema({
    name : {type:String},
    lastName: {type:String}
},{collection:'person'});
module.exports= mongoose.model('person',personsModel);
//module.exports = Person;
