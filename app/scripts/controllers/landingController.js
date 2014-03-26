'use strict';

angular.module('plannerControllers').controller('LandingController', ['$rootScope', '$scope', '$location',
  function($rootScope, $scope, $location){
    $rootScope.bodyLayout = 'landing-page';

    $scope.startPlanning = function(){
      $location.path('/planner');
    };

    //ngAutocomplete    
    $scope.options = {      
      types: '(cities)'
    };    
    $scope.details = '';

  }]);