//requires
var express = require('express');
var router = express.Router();
var pg = require('pg');

//globals
var config = {
  database: 'chi', // name of your database
  host: 'localhost', // where is your database?
  port: 5432, // port for the database
  max: 10, // how many connections at one time
  idleTimeoutMillis: 30000 // 30 seconds to try to connect
};
var pool = new pg.Pool(config);

//gets
// SELECT * FROM "books";
router.get('/', function(req, res){
  pool.connect(function(errorConnectingToDatabase, db, done){
    if(errorConnectingToDatabase) {
      console.log('Error connecting to the database.');
      res.sendStatus(500);
    } else {
      // We connected!!!!
      db.query('SELECT * FROM books ORDER BY "author" ASC;', function(queryError, result){
        done();
        if(queryError) {
          console.log('Error making query.');
          res.sendStatus(500);
        } else {
          // console.log(result); // Good for debugging
          res.send(result.rows);
        }
      });
    }
  });
});

//posts
// INSERT INTO "books"
router.post('/add', function(req, res){
  //retrieves properties from req object
  var title = req.body.title;
  var author = req.body.author;
  var publisher = req.body.publisher;
  var year = req.body.year;

  //boilerplate code for using pool and for error handling
  pool.connect(function(errorConnectingToDatabase, db, done){
    if(errorConnectingToDatabase) {
      console.log('Error connecting to the database.');
      res.send(500);
    } //ends if
    else {
      db.query('INSERT INTO "books" ("author", "title", "publisher", "year")' +
               'VALUES ($1,$2,$3,$4);',
               [author, title, publisher, year],
               function(queryError, result){
                 done(); // releases the connection to pool
                 if(queryError) {
                   console.log('Error making query.');
                   res.send(500);
                 } //end if
                 else {
                   res.sendStatus(201);
                 } //ends else
      });//ends db.query
    } //ends else
  }); //ends pool.connect
});

//puts


//deletes
//DELETE FROM "books"
//WHERE id = $1;
//[bookId]
router.delete('/delete/:valOne', function(req, res){
  console.log("inside router.delete");
  //using url parameters to pass in id# of book to be deleted
  var bookId = req.params.valOne;
  console.log("bookID", bookId);
  //boilerplate code for using pool and for error handling
  pool.connect(function(errorConnectingToDatabase, db, done){
    if(errorConnectingToDatabase) {
      console.log('Error connecting to the database.');
      res.sendStatus(500);
    } //ends if
    else {
      //change SQL code herer
      db.query('DELETE FROM "books"' +
               'WHERE "id" = $1;',
               [bookId],
               function(queryError, result){
                 done(); // releases the connection to pool
                 if(queryError) {
                   console.log('Error making query.');
                   res.sendStatus(500);
                 } //end if
                 else {
                   res.sendStatus(201);
                 } //ends else
      });//ends db.query
    } //ends else
  }); //ends pool.connect
});

module.exports = router;
