var express = require('express');
var fs = require('fs');
var morgan = require('morgan');
var path = require('path');

var app = express();

var accessLogStream = fs.createWriteStream(path.join(__dirname,'access.log'),{flags:'a'});

app.use(morgan('combined',{stream:accessLogStream}));

app.get('/',function (req,res) {
    res.send('hello,world');
});

app.listen(3000);