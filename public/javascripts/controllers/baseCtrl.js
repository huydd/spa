angular
  .module('baseCtrl', [])
  .controller('baseCtrl', ['$scope', '$mdMedia', function ($scope, $mdMedia) {
    $scope.$mdMedia = $mdMedia;
    $scope.test  = 'hello world';
  }]);