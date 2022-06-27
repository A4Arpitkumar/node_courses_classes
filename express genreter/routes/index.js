var express = require('express');
var router = express.Router();
const User = require('../Models/UserSchema');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/getdata', function (req, res) {

  console.log(req.body);

  var password = req.body.password;
  var retypepassword = req.body.retypepassword;


  const data = new User({
    "name" : req.body.name,
    "email" : req.body.email,
    "age" : req.body.age,
    "gender" : req.body.gender,
    "address" : req.body.address,
    "contact" : req.body.contact,
    "course" : req.body.course,
    "password" : req.body.password,
    "retypepassword" : req.body.retypepassword,
  });

  if(password !== retypepassword ){
    console.log("password must be same")
  }
  else{
    const result = data.save();
    res.send(result);
  }
  res.redirect('Home');
})
console.log("Data Inserted");

module.exports = router;
