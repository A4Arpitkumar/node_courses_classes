var express = require('express');
var router = express.Router();
const User = require('../Models/UserSchema');

/* GET home page. */
router.post ('/',async function(req, res, next) {
  try {
    const data = await User.create(req.body);
    res.status(200).json({
      status:"sucess",
      data:data
    })
  } catch (error) {
    res.json({
      error
    })
  }
});

module.exports = router;
