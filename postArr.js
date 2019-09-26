const express = require("express")
app=express()
var dogsArr = [];
app.post('/dogs', function(req, res) {
    var dog = req.body;
    console.log(dog);
    dogsArr.push(dog);
    res.send(dogsArr)
    res.send("Dog added!");
});

app.listen(8081,() =>{
    console.log("8081 port pr sunega")
});