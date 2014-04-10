'use strict';

describe('Service: Apiurlservice', function () {

  // load the service's module
  beforeEach(module('plannerApp'));

  // instantiate service
  var ApiUrlService,
      defaultParams,
      plannerConfig;

  beforeEach(inject(function (_ApiUrlService_, _plannerConfig_) {
    ApiUrlService = _ApiUrlService_;
    plannerConfig = _plannerConfig_;

    defaultParams = [
      'dev=te21',
      'locale=es',
      'callback=JSON_CALLBACK'
    ];

  }));

  it('should return a valid url with default params', function () {
    var testingUrl = '/testing',
        generatedUrl = ApiUrlService.getUrl( testingUrl );

    expect(generatedUrl).toBe( plannerConfig.apiUrl + testingUrl + '?' + defaultParams.join('&') );
  });

  it('should return a valid url with custom params', function () {
    var testingUrl = '/testing',
        customParams = ['foo=bar'],
        generatedUrl = ApiUrlService.getUrl( testingUrl, customParams );

    expect(generatedUrl).toBe( plannerConfig.apiUrl + testingUrl + '?' + defaultParams.join('&') + '&' + customParams.join('&') );
  });

});

