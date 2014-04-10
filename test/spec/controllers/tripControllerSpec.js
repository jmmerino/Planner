'use strict';

describe('Controller: Tripcontroller', function () {  

  // load the controller's module
  beforeEach(module('plannerApp'));

  var TripcontrollerCtrl,
    scope, 
    Trip;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {

    scope = $rootScope.$new();
    Trip = {};
    TripcontrollerCtrl = $controller('TripController', {
      $scope: scope,
      Trip: Trip
    });
  }));

  it('should do the testing correctly', function () {       
    expect(true).toBe(false);
  });
});


