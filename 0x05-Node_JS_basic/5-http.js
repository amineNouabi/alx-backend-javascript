const http = require('http');
const { readFileSync } = require('fs');

const PORT_NUMBER = 1245;
const FILE_PATH = process.argv[2];

const [, ...rows] = readFileSync(FILE_PATH).toString().trim().split('\n');
const studentsByField = {};
rows.forEach((row) => {
  const [firstName, , , field] = row.split(',');
  if (!Object.keys(studentsByField).includes(field)) {
    studentsByField[field] = [firstName];
    return;
  }
  studentsByField[field].push(firstName);
});

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') res.write('Hello Holberton School!');
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    res.write(`Number of students: ${rows.length}\n`);
    Object.keys(studentsByField).forEach((field) => {
      res.write(`Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsByField[field].join(', ')}\n`);
    });
  }
  return res.end();
});

app.listen(PORT_NUMBER || 1245);

module.exports = app;
