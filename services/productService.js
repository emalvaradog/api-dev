const faker = require('faker');
const boom = require('@hapi/boom');

class ProductService {
  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    for (let i = 0; i < 100; i++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        isBlocked: faker.datatype.boolean(),
      });
    }
  }

  async create(body) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...body,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  async find() {
    const products = this.products;
    if (products.length === 0) {
      throw boom.notFound('No products found');
    }
    return products;
  }

  async findOne(id) {
    const product = await this.products.find((item) => item.id === id);
    if (product === undefined) {
      throw boom.notFound('Product not found');
    }
    if (product.isBlock) {
      throw boom.conflict('Product is blocked');
    }
    return product;
  }

  async update(id, body) {
    const product = await this.products.find((item) => item.id === id);
    if (!product) {
      throw boom.notFound('Product not found');
    } else {
      const index = this.products.indexOf(product);
      this.products[index] = {
        ...product,
        ...body,
      };
      return this.products[index];
    }
  }

  async delete(id) {
    const product = await this.findOne(id);
    if (product === -1) {
      throw boom.notFound('Product not found');
    } else {
      const index = this.products.indexOf(product);
      this.products.splice(index, 1);
      return { message: 'Product deleted succesfully' };
    }
  }
}

module.exports = ProductService;
