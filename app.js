var express = require('express')
var bodyParser = require('body-parser');
var app = express();
//var mail = require ('./mail_work/mail');
//var encrypt = require ('./mail_work/encrypt');
var path = require('path');
var mai  = require('./mail_work/node');
app.set('view engine', 'ejs');  
app.use(bodyParser.urlencoded({extended: true }));
var data = { body: 'map' }
app.get('/', function(req, res) { res.render('layout', data) ;})
app.get('/check', function(req, res) {
    console.log(req.query.key);
    console.log(req.query.studentID);
    mai.decrypt(req.query.key,req.query.studentID);
});

app.use('/register',express.static(path.join(__dirname, 'public'))); 
//app.get('/register',function(req,res){res.sendFile('/public/index.html', { root: __dirname });})
app.get('/register',function(req,res){res.sendFile('index.html');})
app.post('/myaction', function(req, res) {
  res.send('You sent the ID "' + req.body.studentID+ '".\nGo check your mail box!');
  mai.sendEmail(req.body.studentID);
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})






