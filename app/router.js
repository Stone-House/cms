'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.resources('users', '/api/v1/users', controller.v1.user)
  router.post('/api/v1/users/login', controller.v1.user.login)
  router.post('/api/v1/users/getUserInfo', controller.v1.user.getUserInfo)
  router.post('/api/v1/users/logout', controller.v1.user.logout)
  router.post('/api/v1/users/changeUserStatus', controller.v1.user.changeUserStatus)

  router.resources('subjectBank', '/api/v1/subjectBank', controller.v1.subjectBank)
};
