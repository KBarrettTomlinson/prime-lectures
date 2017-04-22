$(document).ready(function(){
  console.log("I'm Here For You");
  appendDom();
  addEventListeners();
  endlessSlide($('.box'));

});

function appendDom(){
  $('.container').append("<div class='box'></div>");

}

function endlessSlide(element){
  element.slideToggle(3000,function(){
    endlessSlide(element);
  });
}

function addEventListeners(){
// Mouse Over adds highlight class to .box inside .container
  $('.container').on("mouseover",".box",function(){
    $(this).addClass("highlight");
  });
// Mouse Out removes highlight class to .box inside .container
  $('.container').on("mouseout",".box",function(){
    $(this).removeClass("highlight");
  });



// Toggle is good for when you don't know what the current state is
// but you just want it to do this opposite
// $('.container').on("mouseover",".box",function(){
//   $(this).toggleClass("highlight");
// });
// Mouse Out removes highlight class to .box inside .container
// $('.container').on("mouseout",".box",function(){
//   $(this).toggleClass("highlight");
// });

// fadeToggle is also a thing. And it has some quirky behaviour in combination
// with mouseover and mouseout as an object fades out it no longer occupied
// that space, to then that triggers mouseout.

// fadeIn has two optional parameters
//    time - which is obvious and happens in milliseconds
//    complete - once the time is complete, do you want us to do something?

// fadeOut will bring the element back in to its original space because even
// though it is no longer occupying space, the element still exists
// it is just being given the display: none; property

// other options: toggle hide show slide up slide down slide toggle

// $("#second").css("color", "red");
// $("#second").css({
//   color: "red",
//   fontSize: "150px"
// });



}
