const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3);
const address = Joi.string().min(15);
const phone = Joi.string()
  .pattern(/^[0-9]+$/)
  .length(10);
const email = Joi.string().email();

const createUserSchema = Joi.object({
  name: name.required(),
  address: address.required(),
  phone: phone.required(),
  email: email.required(),
});

const getUserSchema = Joi.object({
  id: id.required(),
});

const updateUserSchema = Joi.object({
  name,
  address,
  phone,
  email,
});

module.exports = { createUserSchema, getUserSchema, updateUserSchema };
