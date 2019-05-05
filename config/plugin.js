'use strict';

// had enabled by egg
// exports.static = true;
exports.validate = {
  enabled: true,
  package: 'egg-validate',
}

// exports.mysql = {
//   enabled: true,
//   package: 'egg-mysql',
// }

exports.sequelize = {
  enabled: true,
  package: 'egg-sequelize',
}