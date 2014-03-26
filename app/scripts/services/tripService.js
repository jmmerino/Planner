'use strict';

angular.module('plannerServices')
  .service('TripService', function Trip() {
    
    this.mainCity = null;
    this.initDate = null;
    this.endDate = null;

    this.numDays = 4;

    this.days = [{
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
    ];


  });
