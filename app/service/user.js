'use strict'

const Service = require('egg').Service

class UserService extends Service {
  async findOne(id) {
    const res = await this.app.mysql.get('users', { id })
    return res
  }

  async findOneByName(name) {
    const res = await this.app.mysql.query(
      'SELECT id, name, avatar_url, user_type, create_at, update_at, phone, is_delete FROM users WHERE name=? and is_delete=?',
    [name, 0])
    return res
  }

  async findOneByNameAndPassword({ name, password }) {
    const res = this.app.mysql.query(
      'SELECT id, name, avatar_url, user_type, create_at, update_at, phone, is_delete FROM users WHERE name=? and password=? and is_delete=?',
      [name, password, 0],
    )
    // const res = await this.app.mysql.select('users', {
    //   where: {
    //     is_delete: 0,
    //     name,
    //     password,
    //   },
    // })
    return res
  }

  async findList() {
    const connection = this.app.mysql
    let sql = `SELECT id, name, avatar_url, user_type, create_at, update_at, phone, is_delete FROM users`
    const user = await connection.query(sql)
    return user
  }

  async findUserByPage({ page, pageSize }) {
    let offset = (page - 1) * pageSize

    const list = await this.app.mysql.query(
      `SELECT id, name, avatar_url, user_type, create_at, update_at, phone, is_delete  FROM users limit ?,? `,
      [offset, pageSize],
    )
    const total = await this.app.mysql.count('users')

    return {
      list,
      page,
      total,
    }
  }

  async findUserNotDelete() {
    const user = await this.app.mysql.select('users', {
      where: { is_delete: 0 },
    })
    return user
  }

  async create(data) {
    const res = await this.app.mysql.insert('users', data)
    return res
  }

  async update(data) {
    const res = await this.app.mysql.update('users', data)
    return res
  }

  async changeStatus(userId, flag) {
    const res = await this.app.mysql.update('users', {
      id: userId,
      is_delete: flag,
    })
    return res
  }
}

module.exports = UserService
