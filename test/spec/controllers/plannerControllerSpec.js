'use strict';

describe('Controller: plannerController', function () {

  // load the controller's module
  beforeEach(module('plannerApp'));

  var PlannerController,
    scope,
    rootScope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    rootScope = $rootScope;    

    PlannerController = $controller('PlannerController', {
      $scope: scope
    });
  }));  

  

  
});

