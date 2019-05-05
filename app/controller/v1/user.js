'use strict'

const Controller = require('egg').Controller

class UserController extends Controller {
  async index() {
    const ctx = this.ctx
    if (!ctx.session.name) {
      ctx.body = {
        message: '未登录',
      }
      ctx.status = 401
      return
    }

    let { params } = ctx

    let { page, pageSize } = ctx.query
    page = parseInt(page)
    pageSize = parseInt(pageSize)

    const userList = await ctx.service.user.findUserByPage({ page, pageSize })
    ctx.body = userList
    ctx.status = 200
  }

  async create() {
    const ctx = this.ctx
    const { password, confirmPassword, name } = ctx.request.body

    let data
    if (password === confirmPassword) {
      data = {
        name,
        password,
        is_delete: 0,
      }

      const ifExit = await ctx.service.user.findOneByName(name)
      console.log('ifExit', ifExit)
      if (ifExit) {
        ctx.status = 417
        ctx.body = {
          message: '用户已经存在，不能重复创建！',
        }
        return
      }

      const res = await ctx.service.user.create(data)
      if (res) {
        ctx.status = 200
        ctx.body = {
          userId: res.id,
        }
      } else {
        ctx.status = 401
      }
    } else {
      ctx.body = {
        message: '两次密码不一致！',
      }
      ctx.status = 400
    }
  }

  async update() {
    const ctx = this.ctx
    let data = Object.assign(ctx.request.body, ctx.params)
    const id = data.id
    delete data.id
    const { password, confirmPassword, name } = ctx.request.body

    if (data.password !== data.confirmPassword) {
      ctx.body = {
        message: '两次密码不一致！',
      }
      ctx.status = 400
    } else {
      delete data.confirmPassword
      delete data.create_at
    }

    const res = await ctx.service.user.update({
      id,
      updates: data,
    })
    if (res) {
      ctx.status = 200
      ctx.body = {
        userId: res.id,
      }
    } else {
      ctx.status = 401
    }
  }

  async destroy() {
    const ctx = this.ctx
    const { id } = ctx.params

    let oneRes = await ctx.service.user.findOne(id)
    if (!oneRes) {
      ctx.status = 417
      ctx.body = {
        message: '用户不存在，请确认id后再试！',
      }
    } else {
      if (oneRes.is_delete === 0) {
        const res = await ctx.service.user.changeStatus(id, 1)
        if (res.affectedRows === 1) {
          ctx.status = 200
          ctx.body = {
            message: '操作成功！',
          }
        } else {
          ctx.body = {
            message: '未知错误！',
            res,
          }
          ctx.status = 417
        }
      } else {
        ctx.status = 417
        ctx.body = {
          message: '该用户已经停用！',
        }
      }
    }
  }

  async login() {
    const ctx = this.ctx
    const { name, password } = ctx.request.body
    let data = {
      name,
      password,
    }
    const user = await ctx.service.user.findOneByNameAndPassword(data)
    if (user) {
      ctx.session.name = name
      ctx.status = 200
      ctx.body = {
        message: '登录成功！',
        data: user,
      }
    } else {
      ctx.status = 401
      ctx.body = {
        message: '用户名或者密码不正确，请重试！',
      }
    }
  }

  async getUserInfo() {
    const { ctx } = this
    if (ctx.session && ctx.session.name) {
      const user = await ctx.service.user.findOneByName(ctx.session.name)
      if (!user) {
        ctx.status = 417
        ctx.body = {
          message: '未找到该登录人，请尝试重新登录！',
        }
        return
      }
      ctx.status = 200
      ctx.body = {
        data: user,
      }
    } else {
      ctx.status = 402
      ctx.body = {
        message: '登录已过期！',
      }
    }
  }

  async changeUserStatus() {
    const ctx = this.ctx
    let data = {}
    Object.assign(data, ctx.request.body, ctx.params)
    let { id, flag } = data

    if (flag !== 0 && flag !== 1) {
      ctx.status = 417
      ctx.body = {
        message: 'flag 参数必须为0，或者1',
      }
      return
    }

    let oneRes = await ctx.service.user.findOne(id)
    if (!oneRes) {
      ctx.status = 417
      ctx.body = {
        message: '用户不存在，请确认id后再试！',
      }
    } else {
      if (oneRes.is_delete !== flag) {
        const res = await ctx.service.user.changeStatus(id, flag)
        if (res.affectedRows === 1) {
          ctx.status = 200
          ctx.body = {
            message: '操作成功！',
          }
        } else {
          ctx.body = {
            message: '未知错误！',
            res,
          }
          ctx.status = 417
        }
      } else {
        ctx.status = 417
        ctx.body = {
          message: '不可重复设置同一个状态！',
        }
      }
    }
  }

  async logout() {
    const ctx = this.ctx
    ctx.session = null
    ctx.status = 200
    ctx.body = {
      message: '已经退出登录',
    }
  }
}

module.exports = UserController
