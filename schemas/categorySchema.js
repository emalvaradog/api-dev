const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string();
const products = Joi.number().min(0).max(200);

const createCategorySchema = Joi.object({
  id: id.required(),
  name: name.required(),
  products: products.required(),
});

const updateCategorySchema = Joi.object({
  name,
  products,
});

const getCategorySchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createCategorySchema,
  updateCategorySchema,
  getCategorySchema,
};
