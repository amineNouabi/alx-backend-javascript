export default function updateStudentGradeByCity(students, city, grades) {
  return students.filter((student) => student.location === city).map((student) => {
    const newStudent = { ...student };
    newStudent.grade = 'N/A';
    grades.forEach((grade) => {
      if (student.id === grade.studentId) {
        newStudent.grade = grade.grade;
      }
    });
    return newStudent;
  });
}
