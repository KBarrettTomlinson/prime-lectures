var http = require('http');
var sum = require('./modules/sum.js');

http.createServer(function(request, response){
  var someNumber = 0;
  someNumber = sum(7,4);
  console.log("Here is someNumber" + someNumber);
  response.writeHead(200);
  response.write("Hello Chi-yaks!");
  response.end();
}).listen(8000);

console.log("listening");
