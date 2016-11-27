angular
  .module('categoryCtrl', [])
  .controller('categoryCtrl', ['$scope', '$mdMedia', function ($scope, $mdMedia) {
    $scope.$mdMedia = $mdMedia;
    $scope.test  = 'hello world';
  }]);