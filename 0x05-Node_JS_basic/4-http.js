const http = require('http');

const PORT_NUMBER = 1245;

const app = http.createServer((req, res) => {
  res.end('Hello Holberton School!');
});

app.listen(PORT_NUMBER || 1245);

module.exports = app;
