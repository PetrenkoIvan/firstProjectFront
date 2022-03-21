const exitFun = () => {
  window.location.href = "loginPage.html";
};

window.onload = async () => {
  const mainContainer = document.getElementById("mainContainer");
  const createContainer = document.createElement("div");
  createContainer.id = "createContainer";

  mainContainer.appendChild(createContainer);

  render();
};

const render = () => {
  const blockName = document.createElement("div");
  blockName.id = "blockField";

  const blockNameDoctor = document.createElement("div");
  blockNameDoctor.id = "blockField";

  const blockDate = document.createElement("div");
  blockDate.id = "blockField";

  const blockComplaints = document.createElement("div");
  blockComplaints.id = "blockField";

  const nameField = document.createElement("p");
  nameField.id = "nameField";
  nameField.textContent = "Имя:";

  const doctorField = document.createElement("p");
  doctorField.id = "nameField";
  doctorField.textContent = "Врач:";

  const dateField = document.createElement("p");
  dateField.id = "nameField";
  dateField.textContent = "Дата:";

  const complaintsField = document.createElement("p");
  complaintsField.id = "nameField";
  complaintsField.textContent = "Жалобы:";

  const inputName = document.createElement("input");
  inputName.id = "Field";
  inputName.type = "text";

  const inputDoctor = document.createElement("input");
  inputDoctor.id = "Field";
  inputDoctor.type = "list";

  const inputDate = document.createElement("input");
  inputDate.id = "Field";
  inputDate.type = "date";

  const inputComplaints = document.createElement("input");
  inputComplaints.id = "Field";
  inputComplaints.type = "text";

  const addButton = document.createElement("button");
  addButton.textContent = "Добавить";

  createContainer.appendChild(blockName);
  createContainer.appendChild(blockNameDoctor);
  createContainer.appendChild(blockDate);
  createContainer.appendChild(blockComplaints);
  blockName.appendChild(nameField);
  blockName.appendChild(inputName);
  blockNameDoctor.appendChild(doctorField);
  blockNameDoctor.appendChild(inputDoctor);
  blockDate.appendChild(dateField);
  blockDate.appendChild(inputDate);
  blockComplaints.appendChild(complaintsField); 
  blockComplaints.appendChild(inputComplaints);
  createContainer.appendChild(addButton);
};
