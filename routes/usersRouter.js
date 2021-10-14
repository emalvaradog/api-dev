const express = require('express');

const validatorHandler = require('../middlewares/validatorHandler');
const UserService = require('../services/userService');
const {
  createUserSchema,
  getUserSchema,
  updateUserSchema,
} = require('../schemas/userSchema');

const router = express.Router();
const service = new UserService();

router.get('/', async (req, res, next) => {
  try {
    const users = await service.find();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
});

// READ
router.get(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await service.findOne(id);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }
);

// CREATE
router.post(
  '/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newUser = await service.create(body);
      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  }
);

// UPDATE
router.put(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const userUpdate = await service.update(id, body);
      res.status(200).json(userUpdate);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const userUpdate = await service.update(id, body);
      res.status(200).json(userUpdate);
    } catch (error) {
      next(error);
    }
  }
);

// DELETE
router.delete(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const deleteUser = await service.delete(id);
      res.status(200).json(deleteUser);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
