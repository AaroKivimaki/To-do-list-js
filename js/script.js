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
