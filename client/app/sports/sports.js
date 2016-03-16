'use strict';

angular.module('playgroundApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/sports/:sportId', {
        templateUrl: 'app/sports/sport.html',
        controller: 'SportsCtrl'
      })
      .when('/sports', {
        templateUrl: 'app/sports/sportmenu/sportmenu.html',
        controller: 'SportmenuCtrl'
      });
  });
