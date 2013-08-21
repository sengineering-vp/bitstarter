var express = require('express');

var app = express.createServer(express.logger());

var fs=require("fs");
var content=fs.readFileSync("index.html");
var buffer = new Buffer(content);
var content2=buffer.toString('utf-8');

app.get('/', function(request, response) {
  response.send(content2);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});



