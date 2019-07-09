var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');


var db = mongoose.connect('mongodb://localhost/orders', { useNewUrlParser: true });

var Person = require('./models/personModel');
var Order = require('./models/ordersModel');

var app = express();
var port=process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Ruta persona
var personRouter = express.Router()
    .post('/person', function(req,res){
        var person = new Person(req.body);
        console.log(person);
        person.save();
        res.send(person);
    })
    .get('/person',function(req,res){
        var query = req.query;
        Person.find(query, function(err,data){
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
        Person.findById(req.params.personId, function(err,data){
            if(data.length==0)
                console.log('no record found')
            if(err){
                res.status(500).send(err);
                console.log(err);
            }
            res.json(data);
        })            
    });

// Orders
var orderRouter =  express.Router()
    .get('/orders' , function(err,res){
        Order.find(function(err,data){
            if(err)
                res.status(500).send(err);
            if(data.length==0)
                console.log('No record found');
            res.json(data);
        })
    })

    orderRouter
    .get('/order/id/:orderId' , function(req,res){
        Order.findById(req.params.orderId,function(err,data){
            if(err)
                res.status(500).send(err);
            if(data.length==0)
                console.log('No record found');
            res.json(data);
            console.log('entro a la orden');
        })
    })

app.use('/api',personRouter, orderRouter);

app.get('/', function(req, res){
    res.send('Welcome to my API');
});

app.listen(port,function(){
console.log('Running on port: '+port);
});