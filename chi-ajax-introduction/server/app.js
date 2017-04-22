// Express makes routing easier
// npm install express --save
var express = require('express');

var app = express();
var port = 5000; // 5000 used for localhost

// Start with two default products
var products = [{make: "Current Designs", model:"Tsunami"},
                {make:"Geo", model:"Tracker"}];

// Route static content to server/public
// By default this looks for index.html
app.use(express.static('server/public', {
  index: 'views/index.html'
}));

// Route GET requests to /products through this function
app.get("/products", function(req, res){
  res.send(products);
});

// Body parser is a module that helps us by
// turning our response body into an Object.
// npm install body-parser --save
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

// Route POST requests to /newProduct through this function
app.post("/newProduct", function(req, res){
  var newProduct = req.body;
  // Add newProduct to the array of products
  products.push(newProduct);
  console.log(newProduct);
  // Respond to the client with success
  res.sendStatus(200);
});

app.listen(port);
console.log("Listening on port ", port);
