'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const ctx = this.ctx;
    const userList = await ctx.service.user.findList();
    ctx.body = userList;
    ctx.status = 200;
  }

  async create() {
    const ctx = this.ctx;
    const { password, confirmPassword, name } = ctx.request.body;
    
    let data;
    if (password === confirmPassword) {
      data = {
        name,
        password,
      };
      const res = await ctx.service.user.create(data);
      if (res.affectedRows === 1) {
        ctx.status = 200;
        ctx.body = {
          userId: res.insertId,
        };
      } else {
        ctx.status = 401;
      }
    } else {
      ctx.body = {
        message: '两次密码不一致！',
      }
      ctx.status = 400;
    }
  }

  async update() {
    const ctx = this.ctx;
    console.log(ctx.params);
    let data = {};
    Object.assign(data, ctx.request.body, ctx.params);
    const res = await ctx.service.user.update(data);
    if (res.affectedRows === 1) {
      ctx.status = 200;
      ctx.body = {
        userId: res.insertId,
      };
    } else {
      ctx.status = 401;
    }
  }
}

module.exports = UserController;
