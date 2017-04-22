//server side communication with the database

//gives us access to mongoose
var mongoose = require('mongoose');
//tells mongoose where the db is
var mongoURI = 'mongodb://localhost:27017/chimessages';
//tell mongoose what to connect to and then specifically the connection property is assigned to the MongoDB
var MongoDB = mongoose.connect(mongoURI).connection;

//if the connection fails
MongoDB.on('error', function(err){
  console.log('Mongo Connection Error: ' + err);
});
//if the connection succeeds
MongoDB.once('open', function(){
  console.log('Connected to Mongo');
});
//export
module.exports = MongoDB;
