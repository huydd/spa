angular.module('appRoutes', []).config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
  function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state('post', {
        url: "/post/:id",
        templateUrl: "themes/post.html",
        controller: 'baseController'
      });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    $locationProvider.hashPrefix('!');
  }]);