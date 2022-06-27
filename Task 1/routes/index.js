var express = require('express');
var router = express.Router();
const User = require('../Model/userSchema');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/getdata',function(req,res){
  console.log(req.body);
    var psw = req.body.psw;
    var psw_repeat = req.body.psw_repeat;

  const data = new User({
    "name":req.body.name,
    "email":req.body.email,
    "psw":req.body.psw,
    "psw_repeat":req.body.psw_repeat
  })

  if(psw !== psw_repeat){
    console.log("password must be same");
  }
  else{
    const result = data.save();
    res.send(result);
  }
  res.redirect('index');
})
console.log("Data Inserted");
module.exports = router;
