module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize

  const User = app.model.define('user', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
      comment: '用户唯一索引',
    },
    name: {
      type: STRING(255),
      comment: '用户昵称',
    },
    avatar_url: {
      type: STRING(255),
      comment: '头像地址',
    },
    phone: {
      type: STRING(64),
      comment: '手机号',
    },
    password: {
      type: STRING(255),
      comment: '密码',
    },
    user_type: {
      type: INTEGER,
      comment: '用户类型，0超管，9权限最低的用户',
    },

    created_at: DATE,
    updated_at: DATE,
    deleted_at: DATE,
  }, {
    // 是否需要增加createdAt、updatedAt、deletedAt字段
    timestamps: true,
    // 同时需要设置paranoid为true（此种模式下，删除数据时不会进行物理删除，而是设置deletedAt为当前时间
    paranoid: true,
    })
  
  return User
}
