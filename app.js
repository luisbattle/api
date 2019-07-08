var express = require('express'),
    mongoose = require('mongoose');


var db = mongoose.connect('mongodb://localhost/orders', { useNewUrlParser: true });

var person = require('./models/personModel');
var order = require('./models/ordersModel');

var app = express();
var port=process.env.PORT || 3000;

// Ruta persona
var personRouter = express.Router()
    .get('/person',function(req,res){
        var query = req.query;
        person.find(query, function(err,data){
            if(data.length==0)
                console.log('no record found')
            if(err){
                res.status(500).send(err);
                console.log(err);
            }
            res.json(data);
            console.log(query);
        });
    });
 
//var id='5d22b8b4640c306f7c0289b7'
personRouter
    .get('/person/id/:personId',function(req,res){
        //person.findById(req.route.)
        person.findById(req.params.personId, function(err,data){
            if(data.length==0)
                console.log('no record found')
            if(err){
                res.status(500).send(err);
                console.log(err);
            }
            res.json(data);
            console.log(query);
        })            
    });


// Ruta Order
var orderRouter = express.Router()
    .get('/order',function(req,res){
        var query = req.query;
        order.find(query, function(err,data){
            if(data.length==0)
                console.log('no record found')
            if(err){
                res.status(500).send(err);
                console.log(err);
            }
            res.json(data);
            console.log(query);
        });
    });




app.use('/api',personRouter, orderRouter)

app.get('/', function(req, res){
    res.send('Welcome to my API');
});

app.listen(port,function(){
console.log('Running on port: '+port);
});