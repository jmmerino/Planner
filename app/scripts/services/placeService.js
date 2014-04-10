'use strict';

angular.module('plannerServices')
  .factory('Place', ['$http', 'ApiUrlService', function ($http, apiUrl) {

    var url = {
      show: 'places/%place_id%.json'
    };

    // AngularJS will instantiate a singleton by calling "new" on this function
    var placeService = {};
    
    placeService.show = function( placeId ){      

      $http.jsonp( apiUrl.getUrl(url.show).replace('%place_id%', placeId) )
        .error(function(){
          console.log('error');
        })
        .success(function(data){
            console.log(data);
          });
    };

    return placeService;
  }]);