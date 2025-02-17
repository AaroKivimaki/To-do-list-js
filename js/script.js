const addTaskButton = document.getElementById("addButton");
const textInput = document.getElementById("inputText");
const addList = document.getElementById("taskList");

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
  }

  textInput.value = "";
});

const removeButton = document.getElementsByClassName("closeButton");