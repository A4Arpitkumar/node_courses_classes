var nodemailer = require('nodemailer');


var transpoter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'',
        pass:''
    }
});

var mailoptions = {
    from:'youremail',
    to:'',
    subject:'',
    text:''
};

transpoter.sendMail(mailoptions,function(error,info){
    if(error){
        console.log(error);
    }
    else{
        console.log('Email sent :'+info.response);
    }
})
