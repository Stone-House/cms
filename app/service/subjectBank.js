const Service = require('egg').Service;

class subjectBank extends Service {
  async list({ limit = 0, offset = 10 }) {
    console.log(this.ctx.model.models.subjectBank)
    console.log(this.ctx.model.SubjectBank)
    return this.ctx.model.SubjectBank.findAndCountAll({
      offset,
      limit,
    })
  }

}

module.exports = subjectBank