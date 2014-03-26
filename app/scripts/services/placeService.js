'use strict';

angular.module('plannerServices')
  .factory('Place', ['$http', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var placeService = {};
    
    placeService.get = function(){      
      // var url = 'http://api.touristeye.com/v3/places/1080.json?dev=te21&locale=es&callback=JSON_CALLBACK';

      // $http.get(url)
      //   .error(function(){
      //     console.log('error');
      //   })
      //   .success(function(data){
      //       console.log(data);
      //     });
    };

    return placeService;
  }]);