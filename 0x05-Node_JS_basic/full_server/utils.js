import { readFile } from 'fs';

export default function readDatabase(dbPath) {
  return new Promise((resolve, reject) => {
    readFile(dbPath, (err, data) => {
      if (err) return reject(new Error('Cannot load the database'));

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
      return resolve(studentsByField);
    });
  });
}
