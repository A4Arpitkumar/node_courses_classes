const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Form1');
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
    },
    gender:{
        type:String
    },
    address:{
        type:String
    },
    contact:{
        type:Number
    },
    course:{
        type:String
    },
    password:{
        type:String
    },
    retypepassword:{
        type:String
    }
})

const User = mongoose.model("User",userSchema);

module.exports = User;