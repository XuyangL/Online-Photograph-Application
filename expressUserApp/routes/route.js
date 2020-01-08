var exp = require('express');
module.exports = function (app) {
  var users = require('../controller/controller');

  // Single user Routes for get, update and delete.
  // app.route('/user/:userID')
  //   .get(users.getUserProfile)
  //   .put(users.signup)
  //   .delete(users.deleteUser);


  // All users routes for create
  app.route('/users')
    .post(users.signup)
    .get(users.list)
    .put(users.changeRole);


  // Single user routes for read, update and delete.
  app.route('/users/:id')
    .get(users.login)
    .put(users.updateUser)
    .delete(users.deleteUser);

  //calrifaiAPP
  app.route('/clarifai/:model')
    .post(users.clarifai);
};

