export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const klai: Student = {
  firstName: "Ali",
  lastName: "Klai",
  age: 58,
  location: "Serbia"
};

const malakian: Student = {
  firstName: 'Daron',
  lastName: 'Malakian',
  age: 54,
  location: 'USA'
};

const studentsList: Student[] = [klai, malakian];


document.addEventListener("DOMContentLoaded", () => {
  const table: HTMLTableElement = document.createElement('table');

  const tableHeader: HTMLTableRowElement = document.createElement("tr");

  for (const key in studentsList[0]) {
    tableHeader.insertAdjacentHTML('beforeend', `<th>${key}</th>`);
  }
  table.appendChild(tableHeader);

  for (const student of studentsList) {
    const tableRow: HTMLTableRowElement  = document.createElement('tr');
    for (const key in studentsList[0]) {
      tableRow.insertAdjacentHTML('beforeend', `<td>${student[key as keyof Student]}</td>`);
    }
    table.appendChild(tableRow);
  }

  document.body.appendChild(table);
});
