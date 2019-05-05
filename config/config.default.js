'use strict'

module.exports = appInfo => {
  const config = (exports = {})

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1549069910582_7545'

  // add your config here
  config.middleware = []

  config.security = {
    csrf: {
      enable: false,
    },
  }

  config.sequelize = {
    username: 'root',
    password: '',
    database: 'cms_dev',
    host: '127.0.0.1',
    port: '3306',
    dialect: 'mysql',
  }

  return config
}
