'use strict';

describe('Service: Place', function () {

  // load the service's module
  beforeEach(module('plannerApp'));

  // instantiate service
  var Place;

  beforeEach(inject(function (_Place_) {
    Place = _Place_;
  }));

  it('should set location to the path passed on', function () {
    var placeJSON = Place.get();

    expect(placeJSON).toBe('');
  });

});








