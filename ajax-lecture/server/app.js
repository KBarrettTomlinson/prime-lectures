//step 1: npm install express --save
var express = require('express');
var app = express();
var port = 5000;

var products = [{make:'bird', model:'umbrella cockatoo'}];



//simplifies all of the code we wrote yesterday that were four differnt lines
//by default this looks for index.html the second argument overrides the default
//and lets it know where the index.html is otherwise it would look in the public
//folder
app.use(express.static('server/public',{
  index: 'views/index.html'
}));

//this sends things over
app.get("/products",function(req,res){
  res.send(products);
});

//posting to server
// use additional module called body parser
//allows us to parse out the data attribute we are sending to server
var bodyParser = require('body-parser');
//HEY i want the application to use this module when I receive this information
// this will allow me to use this info when I do my post request
app.use(bodyParser.urlencoded({extended: true}));
//POSTING TO server
app.post("/newProduct", function(req,res){
  var newProduct = req.body;
  products.push(newProduct);
  //good job buddy you made it. 200 code for you!
  res.sendStatus(200);
});
//END POST REQUEST


app.listen(port);
console.log("I'm listening on your behalf on port", port);
