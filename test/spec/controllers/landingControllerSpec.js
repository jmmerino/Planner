'use strict';

describe('Controller: LandingController', function () {

  // load the controller's module
  beforeEach(module('plannerApp'));

  var LandingController,
    scope,
    rootScope,
    location;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $location) {
    scope = $rootScope.$new();
    rootScope = $rootScope;
    location = $location;

    LandingController = $controller('LandingController', {
      $scope: scope
    });
  }));

  it('should set the bodyLayout in the rootScope', function () {
    expect(rootScope.bodyLayout).toBe('landing-page');
  });

  it('should navigate to /planner when startPlanning is called', function () {
    //Set fake location
    location.path('/new/path');
    rootScope.$apply();
    expect(location.path()).toBe('/new/path');

    //Call start planning
    scope.startPlanning();
    expect(location.path()).toBe('/planner');
  });
});


