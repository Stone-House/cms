'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.resources('users', '/api/v1/users', controller.v1.user)
  router.post('/user/login', controller.v1.user.login)
};
