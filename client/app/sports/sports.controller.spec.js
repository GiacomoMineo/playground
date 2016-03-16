'use strict';

describe('Controller: SportsCtrl', function () {

  // load the controller's module
  beforeEach(module('playgroundApp'));

  var SportsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SportsCtrl = $controller('SportsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
