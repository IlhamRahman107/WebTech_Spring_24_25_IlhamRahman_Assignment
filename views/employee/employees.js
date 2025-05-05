function deleteME(button) {
  button.closest("tr").remove();
}

function editME(btn) {
  let row = btn.parentNode.parentNode;
  if (btn.innerText === "Edit") {
    for (let i = 0; i < row.cells.length - 1; i++) {
      row.cells[i].innerHTML = `<input value="${row.cells[i].innerText}">`;
    }
    btn.innerText = "Save";
  } else {
    for (let i = 0; i < row.cells.length - 1; i++) {
      row.cells[i].innerText = row.cells[i].children[0].value;
    }
    btn.innerText = "Edit";
  }
}
