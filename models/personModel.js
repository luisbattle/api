var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var person = new Schema({
    "id": {type:String},
    "name": {type:String},
    "LastName": {type:String},
    "Address" : {type:String},
    "date_of_admission" : {type:String}, 
    //"phones": {type: String},
    "email": {type:String},
    "dateOfBirth": {type:String},
    "active": {type:Boolean, default : false}
});
module.exports = mongoose.model('person',person)

