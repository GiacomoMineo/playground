'use strict';

angular.module('playgroundApp')
  .controller('SportsCtrl', function ($scope, $routeParams, $http, $location, Auth, socket, $timeout) {
    $scope.favorite = false;
    $scope.games = [];

    $scope.loadGames = function(sportId, callback) {
        // Load games
        $http.get('/api/games/').success(function(games) {
            // Filter current sport games
            // with status active
            var sportGames = [];
            angular.forEach(games, function(item) {
                if(item.status == 'open'
                   && item.sport._id == sportId) {
                    sportGames.push(item);
                }
            });
            callback(sportGames);
        });
    };

    $scope.loadCourts = function(sportId, callback) {
        // Load courts
        $http.get('/api/courts/').success(function(courts) {
            // Filter current sport courts
            // with distance parameter (TODO)
            var sportCourts = [];
            angular.forEach(courts, function(item) {
                if(item.sport == sportId) {
                    sportCourts.push(item);
                }
            });
            callback(sportCourts);
        })
    }

    // Load current sport
    $http.get('/api/sports/' + $routeParams.sportId).success(function(sport) {
    	$scope.sport = sport;
        socket.syncSingleItem('sport', $scope.sport, function(event, newItem) {
            $scope.sport = newItem;
        });

        $scope.loadGames($scope.sport._id, function(games) {
            $scope.games = games;
        });
        $scope.loadCourts($scope.sport._id, function(courts) {
            $scope.courts = courts;
        });

        // If the user is logged in
        // Check if the user has it as favorite
        if(Auth.isLoggedIn()) {
            $http.get('/api/users/me').success(function(user) {
                angular.forEach(user.sports, function(item) {
                    if(item == sport._id) {
                        $scope.favorite = true;
                    }
                });
            });
        }
    });

    $scope.toggleFavoriteSport = function(id) {
        if(id === '') {
            return;
        }
        if(!Auth.isLoggedIn()) {
            $location.path('/login');
            return;
        }
        if(!$scope.favorite) {
            // Add favorite sport for the current user
            Auth.addFavoriteSport(id)
                .then( function() {
                  console.log('Favorite added.');
                  $scope.favorite = true;
                })
                .catch( function() {
                  console.log('Error adding favorite.');
                });
        } else {
            // Remove favorite sport for the current user
            Auth.removeFavoriteSport(id)
                .then( function() {
                  console.log('Favorite removed.');
                  $scope.favorite = false;
                })
                .catch( function() {
                  console.log('Error removing favorite.');
                });
        }
    };
  });
