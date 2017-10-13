var express = require('express');
var router = express.Router();
var queries= require('../db/query');
// Bring in the queries object that has all of the db query functions

// Create the route for get all
router.get('/', function(request, response) {
    queries.getAll()
    .then(function(cartoons){
        response.json(cartoons);
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
router.post('/:cartoon', function(request, response){
    queries.create(cartoon)
    .then(function(cartoons){
        response.json(cartoons);
    })
})

// Create the route for updating


// Route for deleting an item


module.exports = router;
