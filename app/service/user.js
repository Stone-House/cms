'use strict'

const Service = require('egg').Service

class UserService extends Service {
  async findUserByPage({ page = 1, pageSize = 10 }) {
    const list = await this.ctx.model.User.findAndCountAll({
      // 控制要的字段
      attributes: [
        'id',
        'name',
        'avatar_url',
        'phone',
        'user_type',
        'created_at',
        'updated_at',
        'deleted_at',
      ],
      offset: 0,
      limit: pageSize,
    })

    return list
  }

  async findOne(id) {
    const res = await this.ctx.model.User.findOne({
      where: {
        id,
      },
      attributes: [
        'id',
        'name',
        'avatar_url',
        'phone',
        'user_type',
        'created_at',
        'updated_at',
        'deleted_at',
      ],
    })
    return res
  }

  async findOneByName(name) {
    const res = await this.ctx.model.User.findOne({
      where: {
        name,
      },
      attributes: [
        'id',
        'name',
        'avatar_url',
        'phone',
        'user_type',
        'created_at',
        'updated_at',
        'deleted_at',
      ],
    })
    return res
  }

  async findOneByNameAndPassword({ name, password }) {
    const res = this.ctx.model.User.findOne({
      where: {
        name,
        password,
      },
      attributes: [
        'id',
        'name',
        'avatar_url',
        'phone',
        'user_type',
        'created_at',
        'updated_at',
        'deleted_at',
      ],
    })

    return res
  }

  async create(data) {
    const res = await this.ctx.model.User.create(data)
    return res;
  }

  async update({ id, updates }) {
    const user = await this.ctx.model.User.findById(id);
    if (!user) {
      this.ctx.throw(404, 'user no found');
    }

    return user.update(updates)

    const res = await this.ctx.model.User.update(id, data)
  }
}

module.exports = UserService
