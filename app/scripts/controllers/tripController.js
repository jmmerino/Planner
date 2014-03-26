'use strict';

angular.module('plannerControllers')
  .controller('TripController', ['$scope', 'TripService', function ($scope, Trip) {

    $scope.toggleShowCity = function ( dayIndex, cityIndex ) {      
      $scope.trip.days[ dayIndex ].cities[ cityIndex ].active = !$scope.trip.days[ dayIndex ].cities[ cityIndex ].active;              
    };
    
    $scope.trip = Trip;    

  }]);
