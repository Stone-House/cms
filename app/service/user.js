'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async findList() {
    const user = await this.app.mysql.query('select id, name from user limit 10');
    return user;
  }

  async create(data) {
    const res = await this.app.mysql.insert('user', data)
    return res;
  }

  async update(data) {
    const res = await this.app.mysql.update('user', data)
    return res;
  }
}

module.exports = UserService;
