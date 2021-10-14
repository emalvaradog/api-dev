const express = require('express');
const CategoryService = require('../services/categoryService');

const router = express.Router();
const service = new CategoryService();

router.get('/', async (req, res, next) => {
  try {
    const category = await service.find();
    res.status(200).json(category);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const category = await service.findOne(id);
    res.status(200).json(category);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const body = req.body;
    const newCategory = await service.create(body);
    res.status(200).json(newCategory);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const updateCategory = await service.update(id, body);
    res.status(200).json(updateCategory);
  } catch (error) {
    next(error);
  }
});

router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const updateCategory = await service.update(id, body);
    res.status(200).json(updateCategory);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteCategory = await service.delete(id);
    res.status(200).json(deleteCategory);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
