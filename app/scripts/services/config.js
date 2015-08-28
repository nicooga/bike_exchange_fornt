(function() {
  'use strict';

  angular
    .module('frontApp')

    .constant('ENV', {
      API_URL:          'http://localhost:4001',
      GOOGLE_CLIENT_ID: '614812051850-88k7gcf0th6eg17maq950qq6m6hjodv7.apps.googleusercontent.com',
      AUTH0_CLIENT_ID:  'HofXy1Vx00Z40bL3UCZP8fj9k2GcsTjg'
    })

    .run(function($rootScope, ENV) {
      $rootScope.ENV = ENV;
    });
})();
