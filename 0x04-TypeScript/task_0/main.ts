// 1. Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}


// 2. Create two Student objects
const student1: Student = {
  firstName: "Samuel",
  lastName: "Oladele",
  age: 20,
  location: "Lagos"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Abuja"
};
// 3. Create an array of Student objects
const studentsList : Student[] = [student1, student2];

// 4. Render a table using Vanilla JavaScript
const table = document.createElement("table");
const tableHeader = document.createElement("tr");
const header1 = document.createElement("th");
const header2 = document.createElement("th");

header1.textContent = "First Name";
header2.textContent = "Location";

tableHeader.appendChild(header1);
tableHeader.appendChild(header2);
table.appendChild(tableHeader);

// Loop through students and create table rows
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

// Append the table to the body of the document
document.body.appendChild(table);