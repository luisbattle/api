var express = require('express');

var routes = function(Order){

    // Orders
    var orderRouter =  express.Router()
        .post('/order', function(req,res){
            var order = new Order(req.body);
            console.log(order);
            order.save();
            res.status(201).send(order);
        })
        .get('/orders' , function(err,res){
            Order.find(function(err,data){
                if(err)
                    res.status(500).send(err);
                if(data.length==0)
                    console.log('No record found');
                res.json(data);
            })
        });

        orderRouter
        .get('/order/id/:orderId' , function(req,res){
            Order.findById(req.params.orderId,function(err,data){
                if(err)
                    res.status(500).send(err);
                if(data.length==0)
                    console.log('No record found');
                res.json(data);
            })
        });

    return orderRouter;
}

module.exports = routes;