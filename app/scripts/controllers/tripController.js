'use strict';

angular.module('plannerControllers')
  .controller('TripController', function ($scope) {

    $scope.toggleShowCity = function ( dayIndex, cityIndex ) {      
      $scope.trip.days[ dayIndex ].cities[ cityIndex ].active = !$scope.trip.days[ dayIndex ].cities[ cityIndex ].active;              
    };
    
    $scope.trip = {
      initDate: '01/01/2014',
      endDate: '05/01/2014',
      numDays: 4,
      days:[{
        title: 'Miercoles dia 1 de Enero',
        cities: [
          {
            title: 'Barcelona',
            active: true,
            places: [{
              title: 'La sagrada Familia'
            },
            {
              title: 'Parque Guell'
            }]
          },
          {
            title: 'Madrid',
            active: false,
            places:[{
              title: 'Puerta del sol'
            },
            {
              title: 'El retiro'
            }]
          }
        ]
      },
        {
          title: 'Jueves dia 2 de Enero',
          cities: [{
            title: 'Toledo',
            active: false
          }]
        },
        {
          title: 'Viernes dia 3 de Enero',
          cities: [{
            title: 'Valencia',
            active: false
          }]
        }
      ]
      };

  });
