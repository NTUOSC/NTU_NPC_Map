var express = require('express')
var bodyParser = require('body-parser');
var app = express()
var mail = require ('./mail_work/mail');
var encrypt = require ('./mail_work/encrypt');
app.set('view engine', 'ejs');  
app.use(bodyParser.urlencoded({extended: true })); 
var data = { body: 'map' }
app.get('/', function(req, res) { res.render('layout', data) })
app.get('/register',function(req,res){res.sendFile('/mail_work/index.html', { root: __dirname });})
app.post('/myaction', function(req, res) {
  res.send('You sent the name "' + req.body.studentID+ '".');
  mail.sendEmail('ntuosc@gmail.com','12323','123213');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})






