'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1549069910582_7545';

  // add your config here
  config.middleware = [];

  config.security = {
    csrf: {
      enable: false,
    }
  }

  config.mysql = {
    // 单数据库配置
    client: {
      host: '127.0.0.1',
      port: '23333',
      user: 'root',
      password: '926443',
      database: 'cms'
    },
    // 是否加载到app上，默认开启
    app: true,
    // 是否加载到agent上，默认关闭
    agent: false,
  }

  return config;
};