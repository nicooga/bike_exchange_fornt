(function() {
  'use strict';

  angular
    .module('frontApp')
    .controller('MainCtrl', MainCtrl);

  function MainCtrl($scope, $http, auth, $location) {
    var ctrl = this;

    ctrl.login = login;

    function login() {
      auth.signin({}, success, error);

      function success(profile, token) {
        debugger
      }

      function error() {
        debugger
      }
    }
  }
})();
