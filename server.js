const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const dotenv = require("dotenv").config();
const nodemailer = require("nodemailer");
const ejs = require("ejs");
const sendEmail = require("./email");
//const { sendar } = require("./email");
app.set("view engine", "ejs");
app.set(express.urlencoded({ extended: true }));

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

app.get("/", (req, res) => {
  res.render("index");
});
app.post("/", (req, res) => {
  sendEmailar();
  res.redirect("/");
  console.log(process.env.MAIL_USERNAME, "MAIL SENT SUCCESSFULLY");
});

app.listen(PORT, (req, res) => {
  console.log(`SERVER ON PORT: ${PORT}`);
});
