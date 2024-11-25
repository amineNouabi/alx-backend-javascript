const http = require('http');
const { readFile } = require('fs');

const PORT_NUMBER = 1245;
const FILE_PATH = process.argv.length > 2 ? process.argv[2] : '';

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    readFile(filePath, (err, data) => {
      if (err) { return reject(new Error('Cannot load the database')); }
      const report = [];
      const [, ...rows] = data.toString().trim().split('\n');

      const studentsByField = {};
      rows.forEach((row) => {
        const [firstName, , , field] = row.split(',');
        if (!Object.keys(studentsByField).includes(field)) {
          studentsByField[field] = [firstName];
          return;
        }
        studentsByField[field].push(firstName);
      });

      report.push(`Number of students: ${rows.length}`);
      Object.keys(studentsByField).forEach((field) => {
        report.push(`Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsByField[field].join(', ')}`);
      });
      return resolve(report.join('\n'));
    });
  });
}

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') res.end('Hello Holberton School!');
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(FILE_PATH)
      .then((report) => {
        res.write(report);
      })
      .catch((err) => {
        res.write(err.message);
      }).finally(() => {
        res.end();
      });
  }
});

app.listen(PORT_NUMBER || 1245);

module.exports = app;
