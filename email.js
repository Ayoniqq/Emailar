const nodemailer = require("nodemailer");
const dotenv = require("dotenv").config();

//NODEMAILER TRANSPORTER OBJECT
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});
//NODEMAILER MAIL OPTIONS
let mailOptions = {
  from: process.env.MAIL_USERNAME,
  to: "ayuspee@gmail.com", //
  subject: "Emailar(Nodemailer Project)",
  text: "This is a message from Nodemailer Project - EMAILAR",
};

//NODEMAILER SEND MAIL
const sendEmailar = () => {
  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log("Error" + err);
    } else {
      console.log("Email Sent Successully");
    }
  });
};

module.exports = sendEmailar;
