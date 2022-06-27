const express = require('express');
const app = express();
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
app.set('view engine','ejs');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));


mongoose.connect('mongodb://localhost:27017/Form');
console.log("Database Connected");

const userSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    age:{
        type:Number
    }
})
const User  = mongoose.model("User",userSchema)
app.get('/',function(req,res){
    res.render('Home');
})


app.post('/getdata',function(req,res){
        console.log(req.body);
        const data = new User(req.body);
        const result =data.save();
        res.send(result);

        var name = req.body.name;
        var email = req.body.email;
        var age = req.body.age;
        res.redirect('Home');
})


console.log("Data Inserted");


app.listen(4443);