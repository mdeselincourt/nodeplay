const http = require('http'),

// Create a server which always replies with hello world
server = http.createServer((incomingMessage,serverResponse)=>{
    serverResponse.writeHead(200,{'Content-Type':'text/plain'});
    serverResponse.write('Hello world');
    serverResponse.end();
});

// The last parameter “callback” is called when the server fires a ‘listening’ event
server.listen(3000,()=>{
   console.log('Node server created at port 3000');
});
