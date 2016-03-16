'use strict';

describe('Controller: SplashCtrl', function () {

  // load the controller's module
  beforeEach(module('playgroundApp'));

  var SplashCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SplashCtrl = $controller('SplashCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
