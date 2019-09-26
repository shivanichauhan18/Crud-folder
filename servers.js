var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

app.get('/process_get', function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.query.first_name,
      last_name:req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
   console.log("hello world")
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})

// read file data

// var express = require('express');
// var app = express();
// var fs = require("fs");

// var id=4; // var jsonOBJ=JSON.parse(user)
    // fs.writeFile("index.json",jsonOBJ,"utf8", (err)=>{
    //     if(err){
    //         console.log("this is error")
    //     }
    // });




// fs.writeFile("index.json",jsonData,"utf8",function(err){
//     if(err){
//         console.log("there is error")
//         return console.log(err)
//     }
//     console.log("JSON file has been saved.");

// });



// var express = require('express');
// var app = express();
// var jsonData = '{"persons":[{"name":"John","city":"New York"},{"name":"Phil","city":"Ohio"}]}';
// var jsonObj = JSON.parse(jsonData);
// var jsonContent = JSON.stringify(jsonObj);
// fs.writeFile("index.json", jsonContent, 'utf8', function (err) {
    // if (err) {
        // console.log("An error occured while writing JSON Object to File.");
        // return console.log(err);
    // }
    // console.log("JSON file has been saved.");
// }); 

// var data=[
    // {
        // "id": 1,
        // "title": "First post",
        // "content": "Lorem Ipsum",
        // "tags": ["tag1", "tag2", "tag3"],
        // "createdAt": "Mon Aug 27 2018 15:16:17 GMT+0200 (CEST)",
        // "updatedAt": "Mon Aug 27 2018 15:16:17 GMT+0200 (CEST)"
    // },
    // {
        // "id": 2,
        // "title": "Second post",
        // "content": "Lorem Ipsum again",
        // "tags": ["tag2", "tag4"],
        // "createdAt": "Mon Aug 27 2018 16:17:18 GMT+0200 (CEST)",
        // "updatedAt": "Mon Aug 27 2018 16:17:18 GMT+0200 (CEST)"
    // }
// ]

// const fs = require('fs')
// var ids=data[0]["id"+1]
// function mustBeInArray(array, id) {
//     return new Promise((resolve, reject) => {
//         const row = array.find(r => r.id == id)
//         if (!row) {
//             reject({
//                 message: 'ID is not good',
//                 status: 404
//             })
//         }
//         resolve(row)
//     })
// }

// fs.writeFile("index.json", jsonContent, 'utf8', function (err) {
//     fs.writeFileSync(filename, JSON.stringify(row), 'utf8', (err) => {
//     if (err) {
//         console.log(err)
//     }
// });
// mustBeInArray(data,ids)



