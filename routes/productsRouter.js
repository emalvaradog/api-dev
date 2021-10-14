const express = require('express');
const ProductService = require('../services/productService');
const validatorHandler = require('../middlewares/validatorHandler');
const {
  getProductSchema,
  updateProductSchema,
  createProductSchema,
} = require('../schemas/productSchema');

const router = express.Router();
const service = new ProductService();

router.get('/', async (req, res, next) => {
  try {
    const product = await service.find();
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
});

// READ
router.get(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  }
);

// CREATE
router.post(
  '/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newProduct = await service.create(body);
      res.status(201).json(newProduct);
    } catch (error) {
      next(error);
    }
  }
);

// UPDATE
router.patch(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const productUpdate = await service.update(id, body);
      res.status(201).json(productUpdate);
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const productUpdate = await service.update(id, body);
      res.status(201).json(productUpdate);
    } catch (error) {
      next(error);
    }
  }
);

// DELETE
router.delete(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const productDeleted = await service.delete(id);
      res.status(200).json(productDeleted);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
