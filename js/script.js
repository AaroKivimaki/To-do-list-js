const getListClasses = document.getElementsByTagName("lists");
for (let i = 0; i < getListClasses.length; i++) {
  const newSpan = document.createElement("span");
  const spanX = document.createTextNode("X");
  newSpan.classList.add("closeButton");
  newSpan.appendChild(spanX);
  getListClasses[i].appendChild(newSpan);
}

const addTaskButton = document.getElementById("addButton");
const textInput = document.getElementById("inputText");
const addList = document.getElementById("taskList");

addTaskButton.addEventListener("click", () => {
  const newList = document.createElement("li");
  const textInputValue = textInput.value;
  const createTextPlace = document.createTextNode(textInputValue);
  newList.appendChild(createTextPlace);

  newList.classList.add("lists");

  if (textInputValue == "") {
    alert("Can't add nothing");
  } else {
    addList.appendChild(newList);
  }

  textInput.value = "";
});
