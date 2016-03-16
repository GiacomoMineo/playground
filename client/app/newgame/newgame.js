'use strict';

angular.module('playgroundApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/newgame', {
        templateUrl: 'app/newgame/newgame.html',
        controller: 'NewgameCtrl'
      });
  });
