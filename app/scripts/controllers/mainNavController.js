'use strict';

angular.module('plannerControllers').controller('MainNavController', ['$state', '$scope',
  function($state, $scope){
    $scope.setPage = function (page) {
      $state.transitionTo(page);
    };
  }]);