const addTaskButton = document.getElementById("addButton");
const textInput = document.getElementById("inputText");
const getTable = document.getElementById("mainTable");
const getTableRow = document.getElementById("mainTableRow");
const getMainContainer = document.getElementById("mainContainer");

let xCount = 0;

addTaskButton.addEventListener("click", () => {
  const newTableData = document.createElement("td");
  const newTableRow = document.createElement("tr");
  const textInputValue = textInput.value;
  const createTextPlace = document.createTextNode(textInputValue);
  newTableData.appendChild(createTextPlace);

  newList.classList.add("lists");
  if (getTableRow.childElementCount % 2 == 0) {
    newList.classList.add("list1");
  } else {
    newList.classList.add("list2");
  }

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
    getTableRow.appendChild(newList);
    newSpan.appendChild(spanX);
    newList.appendChild(newSpan);

    newList.appendChild(createUpAndDownArrowElement);
    createUpAndDownArrowElement.appendChild(createUpArrow);
    createUpAndDownArrowElement.appendChild(createDownArrow);

    newSpan.id = "x" + xCount++;
  }

  textInput.value = "";
});

function removeTask(target) {
  if (target.classList.contains("closeButton")) {
    target.parentElement.remove();
  }
}

getTableRow.addEventListener("click", function (event) {
  removeTask(event.target);
});

function addCheck(target) {
  if (target.style.textDecoration == "none") {
    target.style.textDecoration = "line-through";
    target.style.backgroundColor = "gray";
  } else if (target.classList.contains("list1")) {
    target.style.textDecoration = "none";
    target.style.backgroundColor = "peru";
  } else {
    target.style.textDecoration = "none";
    target.style.backgroundColor = "burlywood";
  }
}

getTableRow.addEventListener("click", function (e) {
  addCheck(e.target);
});
