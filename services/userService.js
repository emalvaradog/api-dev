const faker = require('faker');
const boom = require('@hapi/boom');

class UserService {
  constructor() {
    this.users = [];
    this.generate();
  }

  generate() {
    for (let i = 0; i < 5; i++) {
      this.users.push({
        id: faker.datatype.uuid(),
        name: faker.name.firstName(),
        address: faker.address.streetAddress(),
        phone: faker.phone.phoneNumber(),
        email: faker.internet.email(),
      });
    }
  }

  async create(body) {
    const newUser = {
      id: faker.datatype.uuid(),
      ...body,
    };
    this.users.push(newUser);
    return newUser;
  }

  async find() {
    const users = this.users;
    if (users.length === 0) {
      throw boom.notFound('User not found');
    }
    return users;
  }

  async findOne(id) {
    const user = await this.users.find((item) => item.id === id);
    if (user === undefined) {
      throw boom.notFound('User not found');
    } else {
      return user;
    }
  }

  async update(id, body) {
    const user = await this.findOne(id);
    if (!user) {
      throw boom.notFound('User not found');
    } else {
      const index = this.users.indexOf(user);
      this.users[index] = {
        ...user,
        ...body,
      };
      return this.users[index];
    }
  }

  async delete(id) {
    const element = await this.findOne(id);
    if (element === -1) {
      throw boom.notFound('User not found');
    } else {
      const index = this.users.indexOf(element);
      this.users.splice(index, 1);
      return { message: 'User deleted succesfully' };
    }
  }
}

module.exports = UserService;
