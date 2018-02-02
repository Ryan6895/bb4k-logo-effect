angular.module('myApp')
.controller('mainController', function($scope){

$scope.Donated = 0;
$scope.Goal = 100;

$scope.Donate = function () {

  $scope.Donated += 100;
  $scope.Update();
}

$scope.Update = function () {

  $scope.progress = {
            "height": 'calc('+ ((1 - ($scope.Donated / $scope.Goal)) * 100)+'%'+')',
            "width": '100%',
            "background-color": 'white',
            "transition": ".5s"
          }
        }
$scope.Update();
})
