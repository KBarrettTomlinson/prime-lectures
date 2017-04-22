var myApp = angular.module("myApp", []);

myApp.controller("BaseController", ["$scope", function($scope){
  $scope.kitty = "Meow Meow Meow";
}]);
