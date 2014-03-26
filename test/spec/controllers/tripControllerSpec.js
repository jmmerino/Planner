'use strict';

describe('Controller: TripcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('plannerApp'));

  var TripcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TripcontrollerCtrl = $controller('TripcontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
