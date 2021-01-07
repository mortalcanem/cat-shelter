// const http = require('http');
// http.createServer((req, res) => {
//   if (req.method === 'POST') {
//     let body = '';
//     req.on('data', data => { body += data });
//     req.on('end', () => {
//       console.log(body);
//     });
//   }
// }).listen(5000);

// const fs = require('fs');
// const server = require('http').createServer();
// server.on('request', (req, res) => {
//   const src = fs.createReadStream('./bigfile.txt');
//   src.on('data', data => res.write(data));
//   src.on('end', () => res.end());
// });
// server.listen(5000);


const fs = require('fs');
const server = require('http').createServer();
server.on('request', (req, res) => {
  const src = fs.createReadStream('./bigfile.txt');
  src.pipe(res);
});
server.listen(5000);