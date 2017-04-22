var express = require("express");
var app = express();
var path = require("path");

app.set("port",5000);

//event handler
app.get("/*", function(req,res){
  // res.send("hello from the other side");
  var file = req.params[0] || "/views/index.html";
  res.sendFile(path.join(__dirname, "/public/", file));

});


app.listen(app.get("port"), function(){
  console.log("I'm listening for you at", app.get("port"));
});
