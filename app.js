var express = require('express')
var app = express()

app.set('view engine', 'ejs');  

var data = { body: 'map' }
app.get('/', function(req, res) { res.render('layout', data) })


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})
