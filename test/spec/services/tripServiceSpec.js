'use strict';

describe('Service: Planning', function () {

  // load the service's module
  beforeEach(module('plannerApp'));

  // instantiate service
  var Planning;
  beforeEach(inject(function (_Planning_) {
    Planning = _Planning_;
  }));

  it('should do something', function () {
    expect(!!Planning).toBe(true);
  });

});
