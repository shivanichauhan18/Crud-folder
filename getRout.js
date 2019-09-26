var express = require('express');

var app = express();

app.get("/courses/:year/:month",(req,res) =>{
    res.send(req.query                     )
});

app.listen(4000, () =>{
    console.log("listining 4000 port pr");
});


fs.readFile("users.json","utf8",(err,data)=> {
    data = JSON.parse(data)
    user = data["user"+req.params.id]
    var jsonOBJ=JSON.parse(user)
    fs.writeFile("index.json",jsonOBJ,"utf8", (err)=>{
        if(err){
            console.log("this is error")
        }
    });
    console.log(user);
    res.send( JSON.stringify(user));

});


app.put('/put_exercise/:id/exercise/:id2',(req,res)=>{
    var course_id = req.params.id;
    var exercises_id = req.params.id2;
    var jsondata = fs.readFileSync('data.json')
    var data = JSON.parse(jsondata);
    
    var num_exercises = data[course_id-1].exercise
    
    var edit_exercise = data[course_id-1][exercises_id - 1]
    edit_exercise = {
                        name :req.body.name,
                        content :req.body.content,
                        hint :req.body.hint,
                        id:exercises_id
                    }
    
    num_exercises.splice(exercises_id-1, 1, edit_exercise);
    
    fs.writeFile("data.json", JSON.stringify(data, null, 2), (err, data) => {
        
    });
    
    return res.send(num_exercises);

});


// app.put('/users/:id', (req, res) => {

//    readFile(data => {

//        // add the new user
//        const userId = req.params["id"];
//        data[userId] = JSON.parse(req.body.data);

//        writeFile(JSON.stringify(data, null, 2), () => {
//            res.status(200).send(`users id:${userId} updated`);
//        });
//    },
//        true);
// });





//     var num_exercises = data[course_id-1].exercise


// d.put('/put/:id',(req,res) =>{
//    // var course_id = req.params.id;
//    // var exercises_id = req.params.id2;


//    var data = fs.readFileSync("demo.json")
//    data = JSON.parse(data);


//    data[id]["name"] = req.body.name;
//    data[id]["surname"] = req.body.surname;

//    // edit_exercise={
//    //    name: req.body.name,
//    //    password: req.body.name,
//    //    profession: req.body.name,
//    //  },
   
//    // const userId=req.params["id"];
//    // data.user1.id=data.user1[userId];

//    fs.writeFileSync("users.json",JSON.stringify(data));
//    console.log(data);

   // var num_exercises = data[course_id-1].exercise

// })