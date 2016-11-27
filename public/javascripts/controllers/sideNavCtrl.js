angular
  .module('sideNavCtrl', [])
  .controller('sideNavCtrl', ['$scope', '$mdMedia', '$mdSidenav', function ($scope, $mdMedia, $mdSidenav) {
    $scope.$mdMedia = $mdMedia;
    $scope.toggle_left_menu = () => $mdSidenav('left').toggle();
    $scope.test  = 'hello world';
  }]);