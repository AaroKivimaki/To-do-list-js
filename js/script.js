const addTaskButton = document.getElementById("addButton");
const textInput = document.getElementById("inputText");
const addList = document.getElementById("taskList");

let xCount = 0;

addTaskButton.addEventListener("click", () => {
  const newList = document.createElement("li");
  const textInputValue = textInput.value;
  const createTextPlace = document.createTextNode(textInputValue);
  newList.appendChild(createTextPlace);

  newList.classList.add("lists");
  if (addList.childElementCount % 2 == 0) {
    newList.classList.add("list1");
  } else {
    newList.classList.add("list2");
  }

  const newSpan = document.createElement("span");
  const spanX = document.createTextNode("X");
  newSpan.classList.add("closeButton");

  if (textInputValue == "") {
    alert("Can't add nothing");
  } else {
    addList.appendChild(newList);
    newSpan.appendChild(spanX);
    newList.appendChild(newSpan);
    newSpan.id = "x" + xCount++;
  }

  textInput.value = "";
});

function removeTask(target) {
  if (target.classList.contains("closeButton")) {
    target.parentElement.remove();
  }
}

addList.addEventListener("click", function (event) {
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

addList.addEventListener("click", function (e) {
  addCheck(e.target);
});
