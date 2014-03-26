'use strict';

angular.module('plannerControllers').controller('LandingController', ['$rootScope', '$scope', '$location', 'TripService',
  function($rootScope, $scope, $location, Trip){
    $rootScope.bodyLayout = 'landing-page';    

    //ngAutocomplete    
    $scope.options = {      
      types: '(cities)'
    };    
    $scope.details = '';

    // ui-bootstrap datepicker    
    
    // TRIP
    $scope.trip = Trip;
    

    // FUNCTIONS

    $scope.startPlanning = function(){
      $location.path('/planner');
    };

    $scope.open = function($event, instance) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope[instance] = true;
    };



  }]);