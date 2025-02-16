const addTaskButton = document.getElementById("addButton");
const textInput = document.getElementById("inputText");
const addList = document.getElementById("taskList");

addTaskButton.addEventListener("click", () => {
  const newList = document.createElement("li");
  const textInputValue = textInput.value;
  const createTextPlace = document.createTextNode(textInputValue);
  newList.appendChild(createTextPlace);

  if (textInputValue == "") {
    alert("Can't add nothing");
  } else {
    addList.appendChild(newList);
  }

  textInput.value = "";
});
