
const environment = process.env.NODE_ENV || 'development'
var config = require('../knexfile')[environment];
console.log(environment)
module.exports = require('knex')(config);
