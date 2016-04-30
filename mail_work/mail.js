module.exports = {
 sendEmail: function(_recipient, _subject, _html) {
  var nodemailer = require('nodemailer');
  var smtpTransport = require('nodemailer-smtp-transport');
  //var config = require("../config/config");
     var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ntuosc@gmail.com',
        pass: 'ntuoscntuosc' //password ask hortune
    }
    });
 
     transporter.sendMail({
         from: 'ntuosc@gmail.com',
         to: _recipient,
         subject: _subject,
         html: _html
     }, 0);
 }
}