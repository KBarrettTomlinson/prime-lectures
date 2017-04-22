$(document).ready(function(){
  console.log('jQuery sourced.');

  refreshProducts();

  $('form').on('submit', function(event) {
    event.preventDefault();
    var product = {};
    product.make = $("#make").val();
    product.model = $("#model").val();

    $.ajax({
      type: 'POST',
      url: '/newProduct',
      data: product,
      success: function(response) {
        console.log("SUCCESS!!!");
        refreshProducts();
      }
    });
    //products.push(product);
  });
});

function refreshProducts() {
  $.ajax({
    type: 'GET',
    url: '/products',
    success: function(response) {
      // response is the products array
      console.log(response);
      displayProducts(response);
    }
  });
}

function displayProducts(products) {
  $("#productsTable").empty();
  for(var i = 0; i < products.length; i++) {
    $("#productsTable").append("<span>" +
                               products[i].make +
                               ": " +
                               products[i].model +
                               "</span><br>");
  }
}
