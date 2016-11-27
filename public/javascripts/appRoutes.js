angular.module('appRoutes', ['ngMaterial']).config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$mdThemingProvider',
  function ($stateProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider) {
    'ngInject';

    $mdThemingProvider.definePalette('spa-color', {
      '50': 'E8F5E9',
      '100': 'C8E6C9',
      '200': 'A5D6A7',
      '300': '81C784',
      '400': '66BB6A',
      '500': '4CAF50',
      '600': '43A047',
      '700': '388E3C',
      '800': '2E7D32',
      '900': '1B5E20',
      'A100': 'B9F6CA',
      'A200': '69F0AE',
      'A400': '00E676',
      'A700': '00C853',
      'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                          // on this palette should be dark or light

      'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
        '200', '300', '400', 'A100'],
      'contrastLightColors': undefined    // could also specify this if default was 'dark'
    });

    $mdThemingProvider.theme('default')
      .primaryPalette('spa-color');

    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state('marketing', {
        url: "/thuong-mai",
        templateUrl: "themes/marketing.html",
        controller: 'marketingCtrl'
      })
      .state('category', {
        url: "/danh-muc",
        templateUrl: "themes/category.html",
        controller: 'categoryCtrl'
      })

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    $locationProvider.hashPrefix('!');
  }]);