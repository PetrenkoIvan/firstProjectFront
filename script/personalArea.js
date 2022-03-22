const listEntrie = []

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
  inputName.addEventListener('change', inputValue(inputName))

  const inputDoctor = document.createElement("input");
  inputDoctor.id = "Field";
  inputDoctor.type = "list";
  inputName.addEventListener('change', inputValue(inputDoctor))

  const inputDate = document.createElement("input");
  inputDate.id = "Field";
  inputDate.type = "date";
  inputName.addEventListener('change', inputValue(inputDate))

  const inputComplaints = document.createElement("input");
  inputComplaints.id = "Field";
  inputComplaints.type = "text";
  inputName.addEventListener('change', inputValue(inputComplaints))

  const addButton = document.createElement("button");
  addButton.textContent = "Добавить";
  addButton.onclick = () =>  {addEntries(inputName,inputDoctor,inputDate,inputComplaints)}

  const listEntries = document.createElement("div")
  listEntries.id = "listEntries"

  const nameUser = document.createElement("p");
  nameUser.id = "nameColumn";
  nameUser.textContent = "Имя:";

  const dateColumn = document.createElement("p");
  dateColumn.id = "nameColumn";
  dateColumn.textContent = "Дата:";

  const doctorNameColumn = document.createElement("p");
  doctorNameColumn.id = "nameColumn";
  doctorNameColumn.textContent = "Врач:";

  const complaintsColumn = document.createElement("p");
  complaintsColumn.id = "nameColumn";
  complaintsColumn.textContent = "Жалобы:";


  listEntrie.map((item, index) => {
    let {name, nameDoctor, date, complaints, id} = listCosts[index];

  })

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
  mainContainer.appendChild(listEntries);
  listEntries.appendChild(nameUser);
  listEntries.appendChild(doctorNameColumn);
  listEntries.appendChild(dateColumn);
  listEntries.appendChild(complaintsColumn);
};

const addEntries = (inputName,inputDoctor,inputDate,inputComplaints) => {
  let nameClient = inputName.value;
  let nameDoctor = inputDoctor.value;
  let date = inputDate.value;
  let complaints = inputComplaints.value;
  const body = {
    name: nameClient,
    nameDoctor,
    date,
    complaints
  }
  listEntrie.push(body)
  console.log(listEntrie);
    name = ''
    inputName.value = ''
    nameDoctor = ''
    inputDoctor.value = ''
    date = ''
    inputDate.value = ''
    complaints = ''
    inputComplaints.value = ''
};

const inputValue = (a) => {
  const valueEvent = (event) => {
    a.value = event.target.value;
  };
  return valueEvent;
};