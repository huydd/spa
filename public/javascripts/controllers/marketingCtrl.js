angular
  .module('marketingCtrl', [])
  .controller('baseCtrl', ['$scope', '$mdMedia', function ($scope, $mdMedia) {
    $scope.$mdMedia = $mdMedia;
    $scope.test  = 'hello world';
  }]);