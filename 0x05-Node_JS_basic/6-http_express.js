const express = require('express');

const PORT_NUMBER = 1245;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(PORT_NUMBER, () => {
  console.log(`Server running at http://localhost:${PORT_NUMBER}/`);
});
module.exports = app;
