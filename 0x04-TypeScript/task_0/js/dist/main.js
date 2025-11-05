// 2. Create two Student objects
var student1 = {
    firstName: "Samuel",
    lastName: "Oladele",
    age: 20,
    location: "Lagos"
};
var student2 = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Abuja"
};
// 3. Create an array of Student objects
var studentsList = [student1, student2];
// 4. Render a table using Vanilla JavaScript
var table = document.createElement("table");
var tableHeader = document.createElement("tr");
var header1 = document.createElement("th");
var header2 = document.createElement("th");
header1.textContent = "First Name";
header2.textContent = "Location";
tableHeader.appendChild(header1);
tableHeader.appendChild(header2);
table.appendChild(tableHeader);
// Loop through students and create table rows
studentsList.forEach(function (student) {
    var row = document.createElement("tr");
    var firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    var locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
});
// Append the table to the body of the document
document.body.appendChild(table);
//# sourceMappingURL=main.js.map