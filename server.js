var express = require('express');

var app = express(),
port = process.env.PORT || 4000;

app.use(express.static(__dirname));
app.listen(port);

console.log('App running at http://localhost:' + port + '/');
