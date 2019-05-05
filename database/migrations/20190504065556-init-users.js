'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('users', {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
        comment: '用户唯一索引',
      },
      name: {
        type: STRING(255),
        comment: '用户昵称'
      },
      avatar_url: {
        type: STRING(255),
        comment: '头像地址'
      },
      phone: {
        type: STRING(64),
        comment: '手机号'
      },
      password: {
        type: STRING(255),
        comment: '密码'
      },
      user_type: {
        type: INTEGER,
        comment: '用户类型，0超管，9权限最低的用户'
      },

      created_at: DATE,
      updated_at: DATE,
      deleted_at: DATE,
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users')
  }
};
