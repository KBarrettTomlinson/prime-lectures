var timesClicked = 0;
var hungryLevel = 100;
var sushiHungerLevel = 5;
var hungry = true;

$(document).ready(function(){
  console.log("I'm here with you");

  $(".container").append("<button>"+"I'm A Button!"+"</button>");

  $(".container").on("click","button",function(){
      console.log('Youve Clicked Me!');
      timesClicked += 1;
      console.log(timesClicked);
      var modByThree = timesClicked % 3;
      if (modByThree === 0){
          appendSushi();
      }
    });

  $(".container").on("click",".sushi",function(){
    if (hungryLevel > 0){
      $(this).remove();
      hungryLevel -= sushiHungerLevel;
      console.log(hungryLevel);
    } else if (hungryLevel === 0){
      console.log("OMG YUM, I'm full");
    }
  });


});


function appendSushi(){
  // $(".container").append("<div class='sushi'>"+"<p>SUSHI</p>"+"</div>");
  $(".container").append("<div class='sushi'></div>");
  var element = $(".container").children().last();
  element.append("<p>SUSHI</p>");
}
