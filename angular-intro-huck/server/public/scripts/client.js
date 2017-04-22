var myApp = angular.module("myApp", []);

myApp.controller("WelcomeController", ["$scope", function($scope){
    $scope.welcomeMessage = "Hello, welcome to our application";


}]);

myApp.controller("NameController", ["$scope", function($scope){
    $scope.greeting = "Hello";
    $scope.name = "";
    // $scope.tester = false;

    $scope.clickable = function(){
      alert('I was clicked!')
      // $scope.tester =true

    }

    $scope.peopleArray = peopleArray;

    $scope.searchName = function(nameValue){


      console.log("Checking!!");
        if (nameValue.toLowerCase().includes($scope.name.toLowerCase())){
          return true
        } else{
          return false
        }

    }

    // var greeting = "Hello"; <- Wont work, only scoped to Javascript!
}]);
