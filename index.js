const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from EngrBrightWebApp1!');
});

server.listen(process.env.PORT || 3000, () => {
  console.log('Server is running...');
});
