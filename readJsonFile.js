var express = require('express');
var app = express();
var fs = require("fs");
const bodyParser = require('body-parser');
var body=app.use(bodyParser.json()); 

// Read data ---------------------------------------------------
body.get('/listUsers', function (req, res) {
    fs.readFile("users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
    });
 })

// Create data ---------------------------------------------------
body.post('/post', function (req, res) {
   var user = {
          name : req.body.name,
          password : req.body.password,
          profession : req.body.profession,
       }
    var data=fs.readFileSync( "users.json") 
    data = data.toString();
    var Data = JSON.parse( data );
    Data["user5"]=user;

    fs.writeFileSync("users.json",JSON.stringify(Data,null,2))
    console.log(Data);
    return res.json(Data)
});

// SHOW PARTICULAR DATA -----------------------------
body.get('/:id', function (req, res) {
fs.readFile("users.json","utf8",(err,data)=> {
    data = JSON.parse(data)
    user = data["user"+req.params.id]
    console.log(user);
    res.send( JSON.stringify(user));
});
})

// DELETE data --------------------------------------
body.delete('/users/:id', (req, res) => {
   var data=fs.readFileSync("users.json")
   var data = JSON.parse( data );
   delete data["user3"];

   fs.writeFileSync("users.json",JSON.stringify(data));
   console.log(data)
   return res.json(data)
});

// put Data ---------------------------------------------
body.put('/put/:userId',(req,res)=>{
   var userId=req.params.userId
   var jsondata = fs.readFileSync('users.json')
   var data = JSON.parse(jsondata); 
   data["user"+userId]["name"] = req.body.name;
   data["user"+userId]["password"] = req.body.password;

   fs.writeFileSync("users.json", JSON.stringify(data));
   return res.json(data)
}),
app.listen(3500, () => console.log('server is listening'));



// Jitendrayaduvanshi3289@gmail.com
