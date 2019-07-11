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

personRouter = require('./Routes/personRoutes')(Person);
orderRouter = require('./Routes/orderRouter')(Order);

app.use('/api',personRouter, orderRouter);

app.get('/', function(req, res){
    res.send('Welcome to my API');
});

app.listen(port,function(){
console.log('Running on port: '+port);
});