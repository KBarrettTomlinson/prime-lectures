//server side!

//BASE MODULES
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

//DATABASE MODULE
var db = require('./modules/db.js');

//ROUTE MODULES
var message = require('./routes/message.js');
var index = require('./routes/index.js');

//APP CONFIG
//this set up allows us to either use our local port or a port that get assigned by a host.
app.set('port', (process.env.PORT || 5000));

//MIDDLEWARE CONFIG
//this part of bodyparser matters because we are using angular, and it allows us to
//take the .json files that they are sending over and extract out the objects within.
app.use(bodyParser.json());
//this part of bodyParser makes the req.body accessible
app.use(bodyParser.urlencoded({extended: true}));
//sets a root directory
app.use(express.static('server/public'));

//ROUTES
//sends us over to the routes based on the call that is being executed
app.use('/message', message);
app.use('/', index);

//LISTEN
//spins up a basic server
app.listen(app.get('port'), function(){
    console.log('Listening on port: ', app.get('port'));
});

module.exports = app;
