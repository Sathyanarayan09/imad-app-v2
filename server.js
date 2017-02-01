var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/img/coff.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/img', 'coff.jpg'));
});

app.get('/ui/img/first.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/img', 'first.jpg'));
});

app.get('/ui/img/image.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/img', 'image.jpg'));
});
app.get('/ui/img/th.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/img', 'th.jpg'));
});

app.get('/ui/img/fb.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/img', 'fb.png'));
});
app.get('/ui/img/I.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/img', 'I.png'));
});
app.get('/ui/img/t.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/img', 't.png'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
