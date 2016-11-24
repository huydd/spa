angular
  .module('baseCtrl', [])
  .controller('baseCtrl', ['$scope', function ($scope) {
    $scope.test  = 'hello world';
  }]);