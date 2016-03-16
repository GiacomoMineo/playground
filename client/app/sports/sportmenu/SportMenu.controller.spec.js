'use strict';

describe('Controller: SportmenuCtrl', function () {

  // load the controller's module
  beforeEach(module('playgroundApp'));

  var SportmenuCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SportmenuCtrl = $controller('SportmenuCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
