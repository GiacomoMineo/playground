'use strict';

describe('Service: Sport', function () {

  // load the service's module
  beforeEach(module('playgroundApp'));

  // instantiate service
  var Sport;
  beforeEach(inject(function (_Sport_) {
    Sport = _Sport_;
  }));

  it('should do something', function () {
    expect(!!Sport).toBe(true);
  });

});
