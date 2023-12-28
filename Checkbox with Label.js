let checkboxWithLabelContainer = document.getElementById("checkboxWithLabelContainer");
checkboxWithLabelContainer.classList.add("checkboxWithLabel_Container");

let inputElement = document.createElement("input");
inputElement.type = "checkbox";
inputElement.id = "checkbox";
checkboxWithLabelContainer.appendChild(inputElement);

let labelElement = document.createElement("label");
labelElement.setAttribute("for", "checkbox");
labelElement.textContent = "Click Me!";
labelElement.id = "checkboxLabel";
checkboxWithLabelContainer.appendChild(labelElement);