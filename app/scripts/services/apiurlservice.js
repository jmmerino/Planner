'use strict';

angular.module('plannerApp')
  .service('ApiUrlService', ['plannerConfig', function ApiUrlService(plannerConfig) {

    var defaultParams = [
      'dev=te21',
      'locale=es',
      'callback=JSON_CALLBACK'
    ];
    
    this.getUrl = function ( url, params ) {
      var p = defaultParams;
      if (params){
        p.push( params );
      }      

      return plannerConfig.apiUrl + url + '?' + p.join('&');
    };
  }]);

