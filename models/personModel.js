var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var personsModel = new mongoose.Schema({
    name : {type:String},
    LastName: {type:String},
    DNI: {type:String},
    Address:{type:String},
    date_of_admission: {type:String},
    phones : {type:Array},
    email: {type:String},
    dateOfBirth : {type:String},
    active : {type:Boolean, default:true},
    versionKey: false
},{collection:'person'});
module.exports= mongoose.model('person',personsModel);
//module.exports = Person;

/*
    "id": 1,
    "name": "Andres",
    "LastName": "Cosentino",
    "Address" : "CABA ",
    "date_of_admission" : "2017-01-15T00:00:00.000Z", 
    "phones": {
        "home": "800-123-4567",
        "mobile": "877-123-1234"
    },
    "email": "luis.batalla@outlook.com",
    "dateOfBirth": "1975-02-01",
    "active": true
*/