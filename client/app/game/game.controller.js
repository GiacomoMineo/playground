'use strict';

angular.module('playgroundApp')
  .controller('GameCtrl', function ($scope, $routeParams, $http) {
    // Load game info
    $http.get('/api/games/' + $routeParams.id).success(function(game) {
    	$scope.game = game;
    });
  });
