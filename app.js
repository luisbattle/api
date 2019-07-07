var express = require('express'),
    mongoose = require('mongoose');


var db = mongoose.connect('mongodb://localhost/orders');

var person = require('./models/personModel.js');

var app = express();
var port=process.env.PORT || 3000;

// Rutas
var router = express.Router();
router.route('/person')
    .get(function(req,res){
        person.find(function(err,person){
            if(err)
                console.log(err)
            else
                res.json(person)
        })
        //res.json(responseJson);
    });

app.use('/api',router)

app.get('/', function(req, res){
    res.send('Welcome to my API');
});

app.listen(port,function(){
console.log('Running on port: '+port);
});