'use strict';

describe('Controller: MainNavController', function () {

  // load the controller's module
  beforeEach(module('plannerApp'));

  var MainNavController,
    scope,
    rootScope,
    state;    

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $state, $templateCache) {   
    scope = $rootScope.$new();
    rootScope = $rootScope;
    state = $state;

    MainNavController = $controller('MainNavController', {
      $scope: scope
    });

    $templateCache.put('views/list.html', '');
    $templateCache.put('views/planner.html', '');

  }));

  it('should set location to the path passed on', function () {
    scope.setPage('planner.list');
    rootScope.$digest();
    expect(state.current.name).toBe('planner.list');
  });

  
});

