'use strict';

angular.module('playgroundApp')
  .controller('MainCtrl', function ($scope, $location, Auth) {
    $scope.isLoggedIn = Auth.isLoggedIn;
    if(!$scope.isLoggedIn()) {
    	$location.path('/');
    }
  });
