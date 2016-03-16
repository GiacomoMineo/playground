'use strict';

angular.module('playgroundApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/splash', {
        templateUrl: 'app/splash/splash.html',
        controller: 'SplashCtrl'
      });
  });
