const express = require('express');

const routes = express.Router();

const { addProduct ,viewProduct } = require('../controllers/ProductController');

routes.get('/',viewProduct);
routes.get('/add',addProduct);

module.exports = routes;