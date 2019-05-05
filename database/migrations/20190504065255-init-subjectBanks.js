'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('subjectBanks', {
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

      created_at: DATE,
      updated_at: DATE,
      deleted_at: DATE,
    })
  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    await queryInterface.dropTable('subjectBank')
  }
};
