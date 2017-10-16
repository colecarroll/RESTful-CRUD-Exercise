var express = require('express');
var router = express.Router();
var queries= require('../db/query');
// Bring in the queries object that has all of the db query functions

// Create the route for get all
router.get('/', function(request, response) {
    queries.getAll()
    .then(function(cartoons){
        console.log(cartoons)
        response.json(cartoons);

    })
    .catch(function(error) {
        console.log(error)
        response.json(error);
    })
})

// Create the route for get one
router.get('/:id', function(request, response){
    queries.getOne(request.params.id)
    .then(function(cartoons){
        response.json(cartoons);
    })
})

// Create the route for creating an item
//this is where we left off
router.post('/', function(request, response){
    console.log('body ', request.body)
    queries.create(request.body)
    .then(function(cartoons){
        response.json(cartoons);
    })
})

// Create the route for updating
router.put('/:id', function(request, response){
    console.log('body ', request.body)
    queries.update(request.params.id, request.body)
    .then(function(cartoons){
        response.json(cartoons);
    })
})

// Route for deleting an item
router.delete('/:id', function(request, response){
    queries.remove(request.params.id)
    .then(()=>response.sendStatus(200))
    
})

module.exports = router;
