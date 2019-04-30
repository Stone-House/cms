'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const ctx = this.ctx;
    if (!ctx.session.username) {
      ctx.body = {
        message: '未登录',
      };
      ctx.status = 401;
      return;
    }

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
        is_delete: 0,
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
      };
      ctx.status = 400;
    }
  }

  async update() {
    const ctx = this.ctx;
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

  async destroy() {
    const ctx = this.ctx;
    const { id } = ctx.params;

    let oneRes = await ctx.service.user.findOne(id);
    if (!oneRes) {
      ctx.status = 417;
      ctx.body = {
        message: '用户不存在，请确认id后再试！',
      };
    } else {
      if (oneRes.is_delete === 0) {
        const res = await ctx.service.user.changeStatus(id, 1);
        if (res.affectedRows === 1) {
          ctx.status = 200;
          ctx.body = {
            message: '操作成功！',
          };
        } else {
          ctx.body = {
            message: '未知错误！',
            res,
          };
          ctx.status = 417;
        }
      } else {
        ctx.status = 417;
        ctx.body = {
          message: '该用户已经停用！',
        };
      }
    }
  }

  async login() {
    const ctx = this.ctx;
    const { name, password } = ctx.request.body;
    let data = {
      name,
      password,
    };
    const user = await ctx.service.user.findOneByNameAndPassword(data);
    console.log(ctx.session);
    if (user && user.length > 0) {
      ctx.session.username = name;
      ctx.status = 200;
      ctx.body = {
        message: '登录成功！',
      };
    } else {
      ctx.status = 401;
      ctx.body = {
        message: '用户名或者密码不正确，请重试！',
      };
    }
  }

  async changeUserStatus() {
    const ctx = this.ctx;
    let data = {};
    Object.assign(data, ctx.request.body, ctx.params);
    let { id, flag } = data;

    if (flag !== 0 && flag !== 1) {
      ctx.status = 417;
      ctx.body = {
        message: 'flag 参数必须为0，或者1',
      };
      return;
    }

    let oneRes = await ctx.service.user.findOne(id);
    if (!oneRes) {
      ctx.status = 417;
      ctx.body = {
        message: '用户不存在，请确认id后再试！',
      };
    } else {
      if (oneRes.is_delete !== flag) {
        const res = await ctx.service.user.changeStatus(id, flag);
        if (res.affectedRows === 1) {
          ctx.status = 200;
          ctx.body = {
            message: '操作成功！',
          };
        } else {
          ctx.body = {
            message: '未知错误！',
            res,
          };
          ctx.status = 417;
        }
      } else {
        ctx.status = 417;
        ctx.body = {
          message: '不可重复设置同一个状态！',
        };
      }
    }

    

  }

  async logout() {
    const ctx = this.ctx;
    ctx.session = null;
    ctx.status = 200;
    ctx.body = {
      message: '已经退出登录',
    };
  }
}

module.exports = UserController;
