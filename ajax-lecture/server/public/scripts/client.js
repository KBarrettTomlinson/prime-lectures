
$(document).ready(function(){
  console.log("I'm here for you");

//making an ajax request to get info from the server
$.ajax({
  type: 'GET',
  url: '/products',
  success: function(response){
    console.log(response);
    for (var i = 0; i < response.length; i++){
      $('#productsTable').append('<span>'+response[i].make+': '+response[i].model+' </span> <br>');
    }
  }
});


  $('form').on('submit',function(e){
    e.preventDefault();
    var product={};
    product.make = $('#make').val();
    product.model = $('#model').val();
    console.log(product);

//sending a new product over to the server side Products array

    $.ajax({
      type: 'POST',
      url: '/newProduct',
      data: product,
      success: function(response){
        console.log("GOOD JOB BUDDY! you sent data to the server");
      }
    });
  });

});
