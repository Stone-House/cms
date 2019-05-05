module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize

  const SubjectBank = app.model.define(
    'subjectBank',
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      category_id: STRING(64),
      serial_number: INTEGER,
      subject_name: STRING(255),
      type: STRING(64),
      content: STRING(255),
      option_a: STRING(255),
      option_b: STRING(255),
      option_c: STRING(255),
      option_d: STRING(255),
      option_e: STRING(255),
      option_f: STRING(255),
      answer: STRING(255),
      score: STRING(64),
      analysis: STRING(255),
      level: STRING(64),
      creator: STRING(255),
      create_date: STRING(64),
      modifier: STRING(255),
      modify_date: STRING(64),
      del_flag: STRING(10),
      application_code: STRING(64),
    },
    {
      // 是否需要增加createdAt、updatedAt、deletedAt字段
      timestamps: true,
      // 同时需要设置paranoid为true（此种模式下，删除数据时不会进行物理删除，而是设置deletedAt为当前时间
      paranoid: true,
    },
  )

  // subject_bank.prototype.associate = function () {
  //   app.model.subject_bank.hasMany(app.model.)
  // }

  console.log(11, app.model.models)
  return SubjectBank
}
