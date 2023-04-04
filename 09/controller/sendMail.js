const nodemailer=require('nodemailer');  //used for sending mail
const prompt = require('prompt-sync')();

function validateEmail(email_id) {   // for email checking
    const regex_pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (regex_pattern.test(email_id)) {
        console.log('The email address is valid');
    }
    else {
        console.log('The email address is not valid');
    }
}

let mailId=prompt('Enter The Email id:');  // For entering data from console
validateEmail(mailId);

const sendmail=async(req,res)=>{
    let testAccount = await nodemailer.createTestAccount();

    let transport=await nodemailer.createTransport({
        host: "smtp.ethereal.email",
    port: 587,
    auth: {
        user: 'alayna.thiel47@ethereal.email',
        pass: 'G4eqQ9sC4sQR5Gx9Sk'
    },
    });

    let reciver=await transport.sendMail({
        from: '"Vismay Sheth 👻" <vismay@gmail.com>', 
        to: `${mailId}`,     // receiver maild id
        subject: "Hello ✔",
        text: "Hello world?",   
        html: "<b>Hello,I am good </b>",
      });
    console.log("message sent:%s",reciver.messageId);
    res.json(reciver);   
};

module.exports=sendmail;