"use strict";

var app = angular.module("app", []);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/modals', {
      templateUrl: 'templates/modals'
    })
    .when('/lists', {
      templateUrl: 'templates/lists'
    })
    .when('/', {
      templateUrl: 'templates/'
    })
    .otherwise({redirectTo: '/'});
}]);
