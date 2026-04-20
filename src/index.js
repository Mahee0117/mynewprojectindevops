const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.end('Server is running on port 3000 4th time nigga nigga');
});

server.listen(PORT, () => {
  console.log('Server is running on port 3000');
});
