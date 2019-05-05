const Controller = require('egg').Controller

function toInt(str) {
  if (typeof str === 'number') return str
  if (!str) return str
  return parseInt(str, 10) || 0
}

class subjectBankController extends Controller {
  async index() {
    const ctx = this.ctx
    const query = { limit: toInt(ctx.query.pageSize), offset: toInt(ctx.query.page) }
    console.log(ctx.model)
    ctx.body = await ctx.service.subjectBank.list(query)
  }
}

module.exports = subjectBankController
