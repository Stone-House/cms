'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async findOne(id) {
    console.log(id);
    const res = await this.app.mysql.get('user', { id });
    console.log(res);
    return res;
  }

  async findList() {
    const user = await this.app.mysql.select('user', {
      where: { is_delete: 0 },
    });
    return user;
  }

  async findUserNotDelete() {
    const user = await this.app.mysql.select('user', {
      where: { is_delete: 0 },
    });
    return user;
  }

  async create(data) {
    const res = await this.app.mysql.insert('user', data);
    return res;
  }

  async update(data) {
    const res = await this.app.mysql.update('user', data);
    return res;
  }

  async destroy(userId) {
    const res = await this.app.mysql.update('user', {
      id: userId,
      is_delete: 1,
    });
    return res;
  }
}

module.exports = UserService;
