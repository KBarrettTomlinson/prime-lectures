$(document).ready(function(){
  //Part 1
  // $(".container").append("<p>Whatever content we want!</p>");
  // $(".container").append("<p>Whatever content we want!</p>");
  // $(".container").append("<p>Whatever content we want!</p>");
  // $(".container").append("<p>Whatever content we want!</p>");
  // $(".container").append("<p>Whatever content we want!</p>");
  // $(".container").append("<p>Whatever content we want!</p>");
  // $(".container").children().last().text("Here is just the last");

  //Part 2
  $(".container").append("<div class='whatever'>" +
                            "<button>BE FUNNY</button>" +
                         "</div>");

  $(".whatever").on("mouseover", function(){
    console.log("Tell a joke");
  });

  //
  //dblclick
  //mousedown
  //mouseup
  //mouseover
  //mouseout
});


















// var x = 10;
// var y = 15;
//
// function addNumbers(a,b){
//   return a + b;
// }
//
// addNumbers(x,y);
//
// var instructor = "Scott";
//
// function changeToChris(){
//   instructor = "Chris";
//   return "Chris";
// }
//
// changeToChris();
//
// console.log(changeToChris());
// console.log("DRUM ROLL, DOES IT CHANGE!? ", instructor);
