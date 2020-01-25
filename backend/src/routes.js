const { Router } = require('express');
const routes = Router();

// const ProductController = require('./controllers/ProductController');

routes.get("/products", ProductController.index);

module.exports = routes;