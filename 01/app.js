//Hello World Program
const http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});   
  console.log('Hello World');
  // res.end('Hello World!');   for printing on web page
}).listen(7000);