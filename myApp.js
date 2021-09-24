var express = require('express');
var app = express();

console.log("Hello World");

var absolutePath = __dirname + '/views/index.html'

function getResponse(req, res) {
    res.sendFile(absolutePath)
};

app.get('/',getResponse);



































 module.exports = app;
