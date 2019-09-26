var data=[
    {
        "id": 1,
        "title": "First post",
        "content": "Lorem Ipsum",
        "tags": ["tag1", "tag2", "tag3"],
        "createdAt": "Mon Aug 27 2018 15:16:17 GMT+0200 (CEST)",
        "updatedAt": "Mon Aug 27 2018 15:16:17 GMT+0200 (CEST)"
    },
    {
        "id": 2,
        "title": "Second post",
        "content": "Lorem Ipsum again",
        "tags": ["tag2", "tag4"],
        "createdAt": "Mon Aug 27 2018 16:17:18 GMT+0200 (CEST)",
        "updatedAt": "Mon Aug 27 2018 16:17:18 GMT+0200 (CEST)"
    }
]

var express = require('express');
var app = express();
const fs = require('fs')

let data = JSON.stringify(data);
// fs.writeFileSync('student-2.json', data);


fs.writeFile('student-3.json', data, (err) => {
    if (err) throw err;
    console.log('Data written to file');
});

console.log('This is after the write call');