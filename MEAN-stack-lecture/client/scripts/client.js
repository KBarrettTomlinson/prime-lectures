//client side logic

// creates our angular module. The module is the thing that knows stuff
// accordig to MVC we give the module controll of the entire document
var myApp = angular.module('myApp', []);

// creating a controller that will have functions and data within
// those things will be within the scope of the myApp.controller it loads in the
//things we will want to have access to while using thins controller. Here we want to
// be able to use $scope and $http, we put those into the dependency injection array
myApp.controller('BaseController', ['$scope', 'MessageService', function($scope, MessageService){
  // these set up variables that are available within the scope of this controller
    $scope.messagesObject = MessageService.messagesObject;
    $scope.messageList = MessageService.messageList;
    $scope.newMessage = MessageService.newMessage;
    $scope.getMessages = MessageService.getMessages;
    $scope.postMessage = MessageService.postMessage;
}]);

//begins factory MessageService
myApp.factory('MessageService', [ '$http', function($http){
  //private variables
  var messagesObject = {};
  var messageList = [];
  var newMessage = {
    name: '',
    message: ''
  };

  function getMessages(){
    $http.get('/message').then(function(response){
      messageList = response.data;
      console.log(messageList);
      messagesObject.messageList = messageList;
      return messagesObject;
    });
  }//ends getMessages

  function postMessage(newMessage){
    console.log("inside postMessage", newMessage);
    $http.post('/message', newMessage).then(function(response){
      console.log(response);
      getMessages();
    });
  }//ends postMessage

  return{
    messagesObject: messagesObject,
    messageList: messageList,
    newMessage: newMessage,
    getMessages: getMessages,
    postMessage: postMessage
  };//ends return
  //return makes all of these things accessible to the controllers
  //when you envoke MessageService that returns and object

}]);//ends factory
