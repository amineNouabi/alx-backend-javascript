const express = require('express');
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
      return resolve(report);
    });
  });
}
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const response = ['This is the list of our students'];
  countStudents(FILE_PATH)
    .then((report) => {
      response.push(...report);
    })
    .catch((err) => {
      response.push(err.message);
    }).finally(() => res.send(response.join('\n')));
});

app.listen(PORT_NUMBER, () => {
  console.log(`Server running at http://localhost:${PORT_NUMBER}/`);
});
module.exports = app;
