var express = require('express');
var path = require('path');
var logger = require('morgan');
var app = express();

app.use(logger('dev'));
app.use(function (req, res, next) {
  res.set('Server', 'Ubuntu');
  res.set('Access-Control-Allow-Origin', '*');
  return next();
});
app.get('/', function (req, res) {
  res.send('=P');
});
app.use(express.static(path.join(__dirname, '')));
app.listen(9100);
console.log('Listening on port 9100');
