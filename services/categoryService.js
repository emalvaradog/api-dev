const faker = require('faker');
const boom = require('@hapi/boom');

class CategoryService {
  constructor() {
    this.categories = [];
    this.generate();
  }

  generate() {
    for (let i = 0; i < 20; i++) {
      this.categories.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.department(),
        products: parseInt(faker.commerce.price(0, 200), 10),
      });
    }
  }

  async create(body) {
    const newCategory = {
      id: faker.datatype.uuid(),
      ...body,
    };
    this.categories.push(newCategory);
    return newCategory;
  }

  async find() {
    const categories = this.categories;
    if (categories.length === 0) {
      throw boom.notFound('No categories found');
    }
    return categories;
  }

  async findOne(id) {
    const category = await this.categories.find((item) => item.id === id);
    if (category === undefined) {
      throw boom.notFound('Category not found');
    } else {
      return category;
    }
  }

  async update(id, body) {
    const category = await this.findOne(id);
    if (!category) {
      throw boom.notFound('Category not found');
    } else {
      const index = this.categories.indexOf(category);
      this.categories[index] = {
        ...category,
        ...body,
      };
      return this.categories[index];
    }
  }

  async delete(id) {
    const element = await this.findOne(id);
    if (element === -1) {
      throw boom.notFound('Category not found');
    } else {
      const index = this.categories.indexOf(element);
      this.categories.splice(index, 1);
      return { message: 'Category deleted succesfully' };
    }
  }
}

module.exports = CategoryService;
