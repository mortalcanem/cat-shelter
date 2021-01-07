const fs = require('fs');
const server = require('http').createServer();
server.on('request', (req, res) => {
  const src = fs.createReadStream('./bigfile.txt');
  src.on('data', data => res.write(data));
  src.on('end', () => res.end());
});
server.listen(5000);


