const addTaskButton = document.getElementById("addButton");
const textInput = document.getElementById("inputText");
const getTable = document.getElementById("mainTable");
let getTableRow = document.getElementById("mainTableRow");
let getTableRow2 = document.getElementById("mainTableRow2");
const getMainContainer = document.getElementById("mainContainer");

let xCount = 0;

addTaskButton.addEventListener("click", () => {
  const newTableData = document.createElement("td");
  const newTableRow = document.createElement("tr");
  const textInputValue = textInput.value;
  const createTextPlace = document.createTextNode(textInputValue);
  newTableData.appendChild(createTextPlace);

  newTableData.classList.add("tableDatas");

  const newSpan = document.createElement("span");
  const spanX = document.createTextNode("X");
  newSpan.classList.add("closeButton");

  const createUpAndDownArrowElement = document.createElement("div");
  const createUpArrow = document.createTextNode("↑");
  const createDownArrow = document.createTextNode("↓");
  createUpAndDownArrowElement.classList.add("upAndDownArrows");

  if (textInputValue == "") {
    alert("Can't add nothing");
  } else {
    if (!getTableRow) {
      getTable.appendChild(newTableRow);
      newTableRow.id = "mainTableRow";
      getTableRow = newTableRow;
    }
    getTableRow.appendChild(newTableData);
    newSpan.appendChild(spanX);
    newTableData.appendChild(newSpan);

    // if (getTable.childElementCount >= 2) {
    // } else {
    //   getTable.appendChild(newTableRow);
    //   newTableRow.id = "mainTableRow" + xCount++;
    //   getTableRow2 = newTableRow;
    // }

    // if (textInputValue == "") {
    // } else {
    //   getTableRow2.appendChild(createUpAndDownArrowElement);
    //   createUpAndDownArrowElement.appendChild(createUpArrow);
    //   createUpAndDownArrowElement.appendChild(createDownArrow);
    // }
  }

  if (getTableRow.childElementCount % 2 == 1) {
    newTableData.classList.add("tableData1");
  } else {
    newTableData.classList.add("tableData2");
  }

  textInput.value = "";
});

function removeTask(target) {
  if (target.classList.contains("closeButton")) {
    target.parentElement.remove();
  }
}

getTable.addEventListener("click", function (event) {
  removeTask(event.target);
});

// ------ Old way to make the checked task -------
// function addCheck(target) {
//   if (target.style.textDecoration == "none") {
//     target.style.textDecoration = "line-through";
//     target.style.backgroundColor = "gray";
//   } else if (target.classList.contains("tableData1")) {
//     target.style.textDecoration = "none";
//     target.style.backgroundColor = "peru";
//   } else {
//     target.style.textDecoration = "none";
//     target.style.backgroundColor = "burlywood";
//   }
// }

getTable.addEventListener("click", function (e) {
  // addCheck(e.target);
  if (e.target.tagName == "TD") {
    e.target.classList.toggle("checked");
  }
});
