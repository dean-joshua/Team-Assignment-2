const routes = require('express').Router();
const professionalData = require('../controllers/professional');

// A single get route 
routes.get('/', professionalData.getData);

module.exports = routes;