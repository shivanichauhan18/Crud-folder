// var express = require('express');
// var app = express();

// app.get('/', function (r, p) {
//    p.send('hey World');
// })

// var express = require('express');
// var app = express();
// app.get('/ab*cd', function(req, res) {   
//    console.log("Got a GET request for /ab*cd");
//    res.send('Page Pattern Match');
// })

// var server = app.listen(8081, function () {
//    var host = server.address().address
//    var port = server.address().port
   
//    console.log("Example app listening at http://%s:%s", host, port)
// })

// var myLogger = function (req, res, next) {
//    console.log('LOGGED')
//    next()
//  }

//  var express = require('express')
//  var app = express()
 
//  var myLogger = function (req, res, next) {
//    console.log('LOGGED')
//    next()
//  }
 
//  app.use(myLogger)
 
//  app.get('/', function (req, res) {
//    res.send('Hello World!')
//  })
 
//  app.listen(3000)

var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})