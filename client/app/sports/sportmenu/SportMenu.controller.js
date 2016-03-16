'use strict';

angular.module('playgroundApp')
  .controller('SportmenuCtrl', function ($scope, $http, socket, Auth) {
    $scope.sports = [];
    $scope.isLoggedIn = Auth.isLoggedIn();

    // Get all sports
    $http.get('api/sports').success(function(sports) {
      $scope.sports = sports;
      socket.syncUpdates('sport', $scope.sports);
    });
    // If the user is logged in
    // Get user favorite sports
    if(Auth.isLoggedIn()) {
      $http.get('api/users/me').success(function(user) {
        $scope.favoriteSports = user.sports;
      });
    }
  });
