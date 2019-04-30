'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async findOne(id) {
    const res = await this.app.mysql.get('user', { id });
    return res;
  }

  async findOneByNameAndPassword({ name, password }) {
    const res = await this.app.mysql.select('user', {
      where: {
        is_delete: 0,
        name,
        password
      }
    })
    return res;
  }

  async findList() {
    const connection = this.app.mysql;
    let sql = `SELECT id, name, is_delete FROM user where name = ?`;
    const user = connection.query(sql, ['postman'])
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

  async changeStatus(userId, flag) {
    const res = await this.app.mysql.update('user', {
      id: userId,
      is_delete: flag,
    });
    return res;
  }
}

module.exports = UserService;
