const express = require('express');
// const cors = require('cors');

const productsRouter = require('./productsRouter');
const categoriesRotuer = require('./categoriesRouter');
const usersRouter = require('./usersRouter');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRotuer);
  router.use('/users', usersRouter);
}

module.exports = routerApi;
