var express = require('express');
var router = express.Router();
var User = require('../Models/userSchema')
/* GET home page. */
router.post('/', async function(req, res, next) {
  
      try {
        
          const data = await User.create(req.body);

          res.status(201).json({
            data
          })

      } catch (error) {
        console.log(error);

      }

});

router.get('/getdata', async function(req, res, next) {
  console.log("test");
  try {
    
      const data = await User.find();
      console.log(data);

      res.status(200).json({
        data
      })

  } catch (error) {
    console.log(error);

  }

});


router.get('/getdata/:id', async function(req, res, next) {
  //console.log("test = "+req.params.id);
  try {
    
      const data = await User.findById(req.params.id);
      console.log(data);

      res.status(200).json({
        data
      })

  } catch (error) {
    console.log(error);

  }

});

module.exports = router;
