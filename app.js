var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('sslcert/server.key', 'utf8');
var certificate = fs.readFileSync('sslcert/server.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};
var express = require('express');
var app = express();


var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(80);
httpsServer.listen(443);

app.get('/', function (req, res) {
  res.redirect('https://telegram.org');
});

app.get('/:id', function (req, res) {
  res.redirect('https://telegram.me/' + req.params.id);
});

app.get('/joinchat/:token', function (req, res) {
    res.redirect('https://telegram.me/joinchat/'+req.params.token);
});
