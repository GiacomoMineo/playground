'use strict';

angular.module('playgroundApp')
  .controller('NewgameCtrl', function ($scope, $http, Auth) {

    $scope.courtMaxDisplay = 3;
    $scope.courtOrderProp = 'name';
    $scope.autoSport = null;
    $scope.selectedSport = null;
    $scope.selectedCourt = null;

    $scope.loadSports = function() {
      // Load user favorite sports
      $http.get('/api/users/me').success(function(me) {
        // Load sport list
        $http.get('/api/sports').success(function(sports) {
          $scope.favoriteSports = new Array();
          $scope.sports = new Array();
          angular.forEach(sports, function(sport) {
            // Set last selected sport
            if($scope.game.status == 'new'
               && sport._id == $scope.game.sport) {
              $scope.selectedSport = sport;
            }
            // Check if it's a favorite
            var isFavorite = false;
            angular.forEach(me.sports, function(fav) {
              if(sport._id == fav) {
                $scope.favoriteSports.push(sport);
                isFavorite = true;
              }
            });
            if(!isFavorite) {
              $scope.sports.push(sport);
            }
          });
        });
      });
    }

    // Check for previous unfinished game
    $http.get('/api/users/me/games').success(function(games) {
      var unsavedGameExists = false;
      for(var i = 0; i < games.length; i++) {
        if(games[i].status == 'new') { 
          unsavedGameExists = true;
          // Load previous game
          $http.get('/api/games/' + games[i]._id).success(function(game) {
            $scope.game = game;
            $scope.loadSports();
          });
          break;
        }
      };
      if(!unsavedGameExists) {
        // Initialize new game
        var game = {
          name: '',
          creator: Auth.getCurrentUser()._id,
          sport: null,
          court: null,
          notes: '',
          participants: [Auth.getCurrentUser()._id],
          date: null,
          status: 'new'
        };
        $http.post('/api/games', game).success(function(newgame) {
          $scope.game = newgame;
          $scope.loadSports();
        });
      }
    });

    // Load court list
    // TODO near courts only with location
    $http.get('/api/courts').success(function(courts) {
      $scope.courts = courts;
      // TODO set last selected court
    });

    $scope.selectSport = function(sport) {
      if($scope.selectedSport != sport) {
        $scope.selectedSport = sport;
        console.log($scope.selectedSport);
        // Save sport to this game
        $http.put('/api/games/' + $scope.game._id, { sport: sport._id }).success(function(newgame) {
          $scope.game = newgame;
        });
        $scope.autoSport = false;
        if($scope.selectedCourt == null) { $scope.selectedCourtName = ''; }
      } else {
        $scope.selectedSport = null;
        // Remove sport from current game
        $http.put('/api/games/' + $scope.game._id, { sport: null }).success(function(newgame) {
          $scope.game = newgame;
        });
        if($scope.selectedCourt == null) { $scope.selectedCourtName = ''; }
      }
    };

    $scope.selectCourt = function(court) {
      if($scope.selectedCourt != court) {
        $scope.selectedCourt = court;
        $scope.selectedCourtName = court.name;
        // Save court to current game
        $http.put('/api/games/' + $scope.game._id, { court: court._id }).success(function(newgame) {
          $scope.game = newgame;
        });

        // If sport hasn't been selected
        if(!$scope.selectedSport) {
          $http.get('/api/sports/' + court.sport).success(function(sport) {
            $scope.selectedSport = sport;
            $scope.autoSport = true;
            // Save change to current game
            $http.put('/api/games/' + $scope.game._id, { sport: sport._id }).success(function(newgame) {
              $scope.game = newgame;
            });
          });
        }
      } else {
        $scope.selectedCourt = null;
        // Remove court from current game
        $http.put('/api/games/' + $scope.game._id, { court: null }).success(function(newgame) {
          $scope.game = newgame;
        });
        if($scope.autoSport) { $scope.selectedSport = null; };
      }
    }

    $scope.addGame = function() {
      if($scope.game === '') {
        return;
      }

      // Validation stuff here
      // ...

      $scope.game.status = 'open';
      console.log($scope.game);

      $http.put('/api/games/' + $scope.game._id, $scope.game, function(res) {
        console.log(res);
      });
    };
  });
