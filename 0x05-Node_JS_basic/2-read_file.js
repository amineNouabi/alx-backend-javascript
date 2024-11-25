const { readFileSync } = require('fs');

module.exports = function countStudents(filePath) {
  try {
    const file = readFileSync(filePath);

    if (!file) throw new Error('Cannot load the database');

    const [, ...rows] = file.toString().trim().split('\n');

    const studentsByField = {};
    rows.forEach((row) => {
      const [firstName, , , field] = row.split(',');
      if (!Object.keys(studentsByField).includes(field)) {
        studentsByField[field] = [firstName];
        return;
      }
      studentsByField[field].push(firstName);
    });

    console.log(`Number of students: ${rows.length}`);
    Object.keys(studentsByField).forEach((field) => {
      console.log(`Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsByField[field].join(', ')}`);
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};
