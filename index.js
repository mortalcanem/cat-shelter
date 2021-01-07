const http = require('http'); // http is built into Node.js, but must be imported to access
const port = 3000;

http.createServer((req, res) => {
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.write('Hello JS WORLD!');
    res.end();
}).listen(port);