const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('OK');
    return;
  }

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('DevSecOpsDemoApp is running successfully');
});

server.listen(port, () => {
  console.log(`DevSecOpsDemoApp listening on port ${port}`);
});
