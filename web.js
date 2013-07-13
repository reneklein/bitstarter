var fs = require('fs');
var express = require('express');

var buff = new Buffer(8);
buff = fs.readFileSync("index.html");
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
  var text =  buff.toString();
  response.send(text);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
