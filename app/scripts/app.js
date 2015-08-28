(function() {
  'use strict';

  angular
    .module('frontApp', [
    /// Dependencies
      'ngRoute',
      'auth0',
      'ngCookies',
      'angular-storage',
      'angular-jwt'
    ])

    /// Routes
    .config(function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl:  'views/main.html',
          controller:   'MainCtrl',
          controllerAs: 'main'
        })
        .otherwise({ redirectTo: '/' });
    })

    /// Auth0
    .config(function(authProvider, ENV) {
      authProvider.init({
        domain:   'bike-exchange.auth0.com',
        clientID: ENV.AUTH0_CLIENT_ID
      });
    })

    .run(function(auth) { auth.hookEvents(); });
})();
