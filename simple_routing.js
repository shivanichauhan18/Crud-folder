var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});

const express = require('express');
const app = express();

const fs = require('fs')

app.use(express.json());

app.get('/get',(req,res)=>{
    fs.readFile('demo.json',(err,data)=>{
        if(err){
            console.log("something went wrong")
        }
        else{
            var data = JSON.parse(data.toString())
            return res.json(data)
        }
    })
})

app.post('/post',(req,res)=>{
    var New={
        name:req.body.name,
        surname:req.body.surname
    }
    let data = fs.readFileSync('demo.json')
    data = data.toString();
    let Data = JSON.parse(data)
    New.id = Data.length + 1;
    Data.push(New)
    fs.writeFileSync("demo.json", JSON.stringify(Data,null,2))
    return res.json(Data)
})

app.listen(3500, () => console.log('server is listening'));



[
  {
    "name": "sonam",
    "surname": "kumawart",
    "id": 1
  },
  {
    "name": "sona",
    "surname": "kappor",
    "id": 2
  }
]



app.post('/users', (req, res) => {

  readFile(data => {
      const newUserId = Object.keys(data).length + 1;

      // add the new user
      data[newUserId] = JSON.parse(req.body.data);

      writeFile(JSON.stringify(data, null, 2), () => {
          res.status(200).send('new user added');
      });
  },
      true);
});



// d.delete("/deleteUser",function(req,res){
//     fs.readFile("users.json","utf8",function(err,data){
//         deletingData=JSON.parse(data)
//         delete deletingData["user"+1];
//         console.log(deletingData)
//         res.send(JSON.stringify(deletingData));
//     });
// })

// app.post('/post',(req,res)=>{
//     var New={
//         name:req.body.name,
//         surname:req.body.surname
//     }app.post('/post',(req,res)=>{

//     let data = fs.readFileSync('demo.json')
//     data = data.toString();
//     let Data = JSON.parse(data)
//     New.id = Data.length + 1;
//     Data.push(New)
//     fs.writeFileSync("demo.json", JSON.stringify(Data,null,2))
//     return res.json(Data)
// })

// app.listen(3500, () => console.log('server is listening'));
