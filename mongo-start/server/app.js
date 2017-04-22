
//requires
var express = require( "express" );
var mongoose = require( 'mongoose' );

//globals
var app = express();
var mongoURI = 'mongodb://localhost:27017/market';
var MongoDB = mongoose.connect(mongoURI).connection;
//mongoose connection to mongo returns an object . connection is a property of that object

MongoDB.on( 'error', function(err){
  console.log("mongo connection error:",err);
});//if mongo errors out in connection, go ahead and run this function

MongoDB.once( 'open', function(){
  console.log("totes connected to mongo, meow");
});//

//ports
app.set("port", (process.env.PORT || 5000));

//uses
app.use(express.static("/server/public/"));

//listens
app.listen(app.get("port"), function(){
  console.log("Listening on Port: " + app.get("port"));
});
