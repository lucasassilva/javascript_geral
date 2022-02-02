const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController')
const postController = require('./src/controllers/postController')

route.get('/', homeController.show);
route.get('/cadastrar_post', postController.show);
route.post('/cadastrar_post', postController.create);

module.exports = route;