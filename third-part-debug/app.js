var debug = require('debug')('http');
var http = require('http');
var name = 'My App';

debug('booting %0',name);

http.createServer(function (req,res) {
    debug(req.method + ' ' + req.url);
    res.end('hello\n');
}).listen(3000,function () {
    debug('listening');
});

require('./worker');