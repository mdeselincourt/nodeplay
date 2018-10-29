var http = require('http'); // import node.js http library for hosting a webserver
var playmodule = require('./playmodule.js'); // Note no filename extension...

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'}); // write response header
	res.write(" Hello World! It's " + playmodule.myDateTime()); // write response body
	res.write(" URL (path) requested was: " + req.url); // Output request as debugging/demo
    res.end(); // End response
}).listen(8082); // Host on port 8082