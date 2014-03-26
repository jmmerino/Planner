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


    // ui-bootstrap datepicker
    $scope.showWeeks = true;
    $scope.dateOptions = {
      'year-format': "'yy'",
      'starting-day': 1
    };
    $scope.open = function($event, instance) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope[instance] = true;
    };

  }]);