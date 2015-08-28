(function() {
  'use strict';

  angular
    .module('frontApp')

    .constant('ENV', {
      API_URL:          '@@API_URL',
      GOOGLE_CLIENT_ID: '@@GOOGLE_CLIENT_ID',
      AUTH0_CLIENT_ID:  '@@AUTH0_CLIENT_ID'
    })

    .run(function($rootScope, ENV) { $rootScope.ENV = ENV; });
})();
