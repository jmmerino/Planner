'use strict';

angular.module('plannerControllers').controller('LandingController', ['$rootScope', '$scope', '$location',
  function($rootScope, $scope, $location){
    $rootScope.bodyLayout = 'landing-page';

    $scope.startPlanning = function(){
      $location.path('/planner');
    };

  }]);