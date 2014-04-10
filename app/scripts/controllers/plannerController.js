'use strict';

angular.module('plannerControllers').controller('PlannerController', ['$rootScope', '$scope', 'Place',
  function($rootScope, $scope, Place){
    $rootScope.bodyLayout = '';

    Place.show( 1080 );

    $scope = $scope;

  }]);