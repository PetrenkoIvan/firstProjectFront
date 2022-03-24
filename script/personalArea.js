let listEntrie = [];

const exitFun = () => {
  window.location.href = "loginPage.html";
};

window.onload = async () => {
  const mainContainer = document.getElementById("mainContainer");
  const createContainer = document.createElement("div");
  createContainer.id = "createContainer";

  mainContainer.appendChild(createContainer);
  const resp = await fetch("http://localhost:8080/api/entries/getAllEntries", {
    method: "GET",
    headers: {
      "Authorization": localStorage.getItem("token"),
      "Content-Type": "application/json;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
    },
  });

const  result = await resp.json();
  listEntrie = result;

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
  inputName.addEventListener("change", inputValue(inputName));

  const inputDoctor = document.createElement("input");
  inputDoctor.id = "Field";
  inputDoctor.type = "list";
  const listDoctor = document.createElement("DATALIST");
  inputDoctor.appendChild(listDoctor)
  inputDoctor.addEventListener("change", inputValue(inputDoctor));

  const inputDate = document.createElement("input");
  inputDate.id = "Field";
  inputDate.type = "date";
  inputDate.value = moment().format("YYYY-MM-DD");
  inputDate.addEventListener("change", inputValue(inputDate));

  const inputComplaints = document.createElement("input");
  inputComplaints.id = "Field";
  inputComplaints.type = "text";
  inputComplaints.addEventListener("change", inputValue(inputComplaints));

  const addButton = document.createElement("button");
  addButton.textContent = "Добавить";
  addButton.onclick = () => {
    addEntries(inputName, inputDoctor, inputDate, inputComplaints);
  };

  const listEntries = document.createElement("div");
  listEntries.id = "listEntries";


  const columnArea = document.createElement("div");
  columnArea.id = "columnArea";

  listEntries.appendChild(columnArea);

  const nameUserColumn = document.createElement("p");
  nameUserColumn.id = "nameColumn";
  nameUserColumn.textContent = "Имя";

  const dateColumn = document.createElement("p");
  dateColumn.id = "nameColumn";
  dateColumn.textContent = "Дата";

  const doctorNameColumn = document.createElement("p");
  doctorNameColumn.id = "nameColumn";
  doctorNameColumn.textContent = "Врач";

  const complaintsColumn = document.createElement("p");
  complaintsColumn.id = "nameColumn";
  complaintsColumn.textContent = "Жалобы";

const panelTools = document.createElement('div')
panelTools.id = 'panelTools'

const toolsFiltr = document.createElement('div')
toolsFiltr.id = 'blockTools'

const toolsSorting = document.createElement('div')
toolsSorting.id = 'blockTools'

const nameTools = document.createElement('p')
nameTools.id = 'nameTools'
nameTools.textContent = 'Сортировать по:'

const fildSort = document.createElement('input')
fildSort.id = 'fildTools'
fildSort.type = 'List'

const textTools = document.createElement('p')
textTools.id = 'nameTools'
textTools.textContent = 'Направление:'

const ListSort = document.createElement('input')
ListSort.id = 'fildTools'
ListSort.type = 'List'

const blockTools = document.createElement('div')
blockTools.id = 'blockTools'

const blockSort = document.createElement('div')
blockSort.id = 'blockTools'

toolsSorting.appendChild(blockTools)
toolsSorting.appendChild(blockSort)
blockTools.appendChild(nameTools)
blockTools.appendChild(fildSort)
blockSort.appendChild(textTools)
blockSort.appendChild(ListSort)


panelTools.appendChild(toolsFiltr)
panelTools.appendChild(toolsSorting)

mainContainer.appendChild(panelTools)
mainContainer.appendChild(listEntries);


  const contentList = document.createElement("div");
  contentList.id = "contentList";
  listEntries.appendChild(contentList);

  columnArea.appendChild(nameUserColumn);
  columnArea.appendChild(doctorNameColumn);
  columnArea.appendChild(dateColumn);
  columnArea.appendChild(complaintsColumn);

  blockName.appendChild(nameField);
  blockNameDoctor.appendChild(doctorField);
  blockDate.appendChild(dateField);
  blockComplaints.appendChild(complaintsField);

  blockName.appendChild(inputName);
  blockNameDoctor.appendChild(inputDoctor);
  blockDate.appendChild(inputDate);
  blockComplaints.appendChild(inputComplaints);

  createContainer.appendChild(blockName);
  createContainer.appendChild(blockNameDoctor);
  createContainer.appendChild(blockDate);
  createContainer.appendChild(blockComplaints);
  createContainer.appendChild(addButton);

  render();
};

const render = () => {
  while (contentList.firstChild) {
    contentList.removeChild(contentList.lastChild);
  }
  listEntrie.map((item, index) => {
    let { nameUser, nameDoctor, date, complaints, id } = listEntrie[index];

    const container = document.createElement("div");
    container.id = `entriesContainer-${index}`;
    container.className = "entries-container";

    const correctDate = moment(`${date}`).format("DD.MM.YYYY");

    const nameClient = document.createElement("p");
    const nameDoctorF = document.createElement("p");
    const dateF = document.createElement("p");
    const complaintsF = document.createElement("p");

    nameClient.textContent = `${nameUser}`;
    nameDoctorF.textContent = `${nameDoctor}`;
    dateF.textContent = `${correctDate}`;
    complaintsF.textContent = `${complaints}`;

    const buttonArea = document.createElement("div");
    buttonArea.id = "buttonArea";

    const buttonEdit = document.createElement("button");
    buttonEdit.id = "buttonEntries";
    const imageEdit = document.createElement("img");
    imageEdit.src = "/img/imgEntries/Edit.svg";
    buttonEdit.appendChild(imageEdit);

    const buttonDelete = document.createElement("button");
    buttonDelete.id = "buttonEntries";
    buttonDelete.onclick = () => {
      deleteFun(id);
    };
    const imageDelete = document.createElement("img");
    imageDelete.src = "/img/imgEntries/Delete.svg";
    buttonDelete.appendChild(imageDelete);

    container.appendChild(nameClient);
    container.appendChild(nameDoctorF);
    container.appendChild(dateF);
    container.appendChild(complaintsF);
    container.appendChild(buttonArea);
    buttonArea.appendChild(buttonEdit);
    contentList.appendChild(container);
    buttonArea.appendChild(buttonDelete);
  });
};

const addEntries = async (
  inputName,
  inputDoctor,
  inputDate,
  inputComplaints
) => {
  let nameClient = inputName.value;
  let nameDoctor = inputDoctor.value;
  let date = inputDate.value;
  let complaints = inputComplaints.value;

  if (nameClient && nameDoctor && date && complaints) {
    const resp = await fetch("http://localhost:8080/api/entries/", {
      method: "POST",
      headers: {
        "Authorization": localStorage.getItem("token"),
        "Content-Type": "application/json;charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        firstName: nameClient,
        nameDoctor,
        date,
        complaints,
      }),
    });

    const result = await resp.json();

    listEntrie = result;
  } else alert("Заполните все поля")

  inputName.value = "";
  nameDoctor = "";
  inputDoctor.value = "";
  date = "";
  inputDate.value = moment().format("YYYY-MM-DD");
  complaints = "";
  inputComplaints.value = "";
  render();
};

const inputValue = (a) => {
  const valueEvent = (event) => {
    a.value = event.target.value;
  };

  return valueEvent;
};

const deleteFun = async (id) => {
  const resp = await fetch(
    `http://localhost:8080/api/entries/delete?id=${id}`,
    {
      method: "DELETE",
      headers: {
        "Authorization": localStorage.getItem("token"),
        "Content-Type": "application/json;charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  let result = await resp.json();
  listEntrie = result;

  render();
};
