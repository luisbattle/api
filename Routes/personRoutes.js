var express = require('express');

var routes = function(Person){
// Ruta persona
var personRouter = express.Router()
    .post('/person', function(req,res){
        var person = new Person(req.body);
        console.log(person);
        person.save();
        res.status(201).send(person);
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

return personRouter;
};

module.exports = routes;
