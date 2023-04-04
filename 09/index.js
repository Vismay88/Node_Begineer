const express=require('express');
const APP=express();
const sendmail=require('./controller/sendMail')
let PORT=8000;

APP.get('/',sendmail);
APP.listen(PORT,()=> console.log(`Running on Port number ${PORT}`));
        
