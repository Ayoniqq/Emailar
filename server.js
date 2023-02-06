const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
//const nodeMailer = require('nodemailer');


//NODEMAILER TRANSPORTER OBJECT
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN
    }
});








app.listen(PORT, (req,res) => {
    console.log(`SERVER ON PORT: ${PORT}`);
})



