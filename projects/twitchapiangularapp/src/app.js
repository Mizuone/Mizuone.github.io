(function() {
  'use strict';

angular.module('fcc_twitch_api', ['ngMaterial', 'ngRoute']);

angular.module('fcc_twitch_api').config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider.when('/', {
    templateUrl: './src/views/allstreamers.html',
    controller: 'mainController'
  })
  .when('/online-only', {
    templateUrl: './src/views/onlinestreamers.html',
    controller: 'mainController'
  })
  .when('/offline-only', {
    templateUrl: './src/views/offlinestreamers.html',
    controller: 'mainController'
  });

  $routeProvider.otherwise( { redirectTo: '/' });
});

})();
