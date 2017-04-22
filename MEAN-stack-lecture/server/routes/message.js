//server side queries with the database

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//creates MessageSchema object template
var MessageSchema = mongoose.Schema({
    name: String,
    message: String
});
//creates a mongoose model, tells it the model name, the schema it is associated with and what collection it bolongs to
var Message = mongoose.model('message', MessageSchema, 'messages');


//CRUD
//get everything
router.get('/', function(req,res){
    Message.find({}, function(err, allMessages){
      if(err){
        console.log('Mongo Error: ', err);
      }

      res.send(allMessages);
    });
});

//Post something
router.post('/', function(req,res){
  //pick apart the object that has been sent over
    var message = new Message({
        name: req.body.name,
        message: req.body.message
    });
  //save it
    message.save(function(err, savedMessage){
      if(err){
        console.log('Mongo Error: ', err);
        res.sendStatus(500);
      }

      res.send(savedMessage);
    });
});

router.put('/', function(req,res){
    res.sendStatus(200);
});

router.delete('/', function(req,res){
    res.sendStatus(200);
});

//exports
module.exports = router;
