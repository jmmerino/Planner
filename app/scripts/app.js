'use strict';

var plannerApp = angular.module('plannerApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'plannerControllers',
  'plannerServices',
  'ui.router',
  'ngAutocomplete',
  'ui.bootstrap.datepicker'
]);

//Create namespace for controllers
angular.module('plannerControllers', []);
angular.module('plannerServices', []);


plannerApp.config(['$stateProvider', function ($stateProvider) {
    $stateProvider
      .state('landing', {
        url: '',
        templateUrl: 'views/landing.html'
      })
      .state('planner', {
        url: '/planner',
        templateUrl: 'views/planner.html',
      })
      .state('planner.list', {
        url: '/list',
        views: {          
          'central': {templateUrl: 'views/list.html'}
        }
      })
      .state('planner.map', {
        url: '/map',
        views: {          
          'central': {templateUrl: 'views/map.html'}
        }
      });     
  }]);
