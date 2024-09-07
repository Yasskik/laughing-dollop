let index = 0;

document
  .getElementById("dataForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();


    const theName = document.getElementById("the-name").value;
    const theNumber = document.getElementById("the-number").value;
    const timeSubmitted = new Date().toLocaleString();

    const table = document
      .getElementById("dataTable")
      .getElementsByTagName("tbody")[0];


    const newRow = table.insertRow();
    newRow.innerHTML = `
    <td>${++index}</td> 
    <td>${theName}</td>
    <td>${theNumber}</td>
    <td>
      <button onclick="editRow(this)" class="edit">Edit</button>
      <button onclick="removeRow(this)" class="remove">Remove</button>
    </td>
    <td>${timeSubmitted}</td>
  `;


    document.getElementById("dataForm").reset();
  });


function editRow(button) {
  const row = button.parentElement.parentElement;
  const name = row.cells[1].innerText;
  const number = row.cells[2].innerText;


  document.getElementById("the-name").value = name;
  document.getElementById("the-number").value = number;


  row.remove();


  updateTableIndices();
}

function removeRow(button) {
  const row = button.parentElement.parentElement;
  row.remove();


  updateTableIndices();
}


function updateTableIndices() {
  const rows = document.querySelectorAll("#dataTable tbody tr");
  rows.forEach((row, i) => {
    row.cells[0].innerText = i + 1;
  });
  index = rows.length;
}
