var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('hello shivani');
   res.send('what are you doing?')
})

var server = app.listen(8081, function (){

})
