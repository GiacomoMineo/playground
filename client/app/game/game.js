'use strict';

angular.module('playgroundApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/game/:id', {
        templateUrl: 'app/game/game.html',
        controller: 'GameCtrl'
      });
  });
