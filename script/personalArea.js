let listEntrie = [];
if (!localStorage.getItem("token") || !localStorage.getItem("token"))
  window.location.href = "loginPage.html";

const exitFun = () => {
  localStorage.clear();
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
      Authorization: localStorage.getItem("token"),
      "Content-Type": "application/json;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
    },
  });

  const result = await resp.json();
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

  const listDoctors = document.createElement("datalist");
  listDoctors.id = "doctors";
  const doctorList = ["Петров Петр Петрович", "Иванов Иван Иванович"];
  for (let i = 0; i <= doctorList.length; i++) {
    const a = new Option("", doctorList[i]);
    listDoctors.appendChild(a);
  }
  const inputDoctor = document.createElement("input");
  inputDoctor.type = "text";
  inputDoctor.id = "Field";
  inputDoctor.name = "inputDoctor";
  inputDoctor.addEventListener("change", inputValue(inputDoctor));
  inputDoctor.appendChild(listDoctors);
  inputDoctor.setAttribute("list", "doctors");

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

  const panelTools = document.createElement("div");
  panelTools.id = "panelTools";

  const toolsFiltr = document.createElement("div");
  toolsFiltr.id = "toolsContainer";

  const toolsSorting = document.createElement("div");
  toolsSorting.id = "toolsContainer";

  const nameTools = document.createElement("p");
  nameTools.id = "nameTools";
  nameTools.textContent = "Сортировать по:";

  const sortInput = document.createElement("datalist");
  sortInput.id = "sort";
  const sortList = ["Имя", "Врач", "Дата"];
  for (let i = 0; i <= doctorList.length; i++) {
    const a = new Option("", sortList[i]);
    sortInput.appendChild(a);
  }
  const fildSort = document.createElement("input");
  fildSort.type = "text";
  fildSort.id = "Field";
  fildSort.appendChild(sortInput);
  fildSort.setAttribute("list", "sort");

  const textTools = document.createElement("p");
  textTools.id = "nameTools";
  textTools.textContent = "Направление:";

  const directionInput = document.createElement("datalist");
  directionInput.id = "direction";
  const directionList = ["По возрастанию", "По убыванию"];

  for (let i = 0; i <= directionList.length; i++) {
    const a = new Option("", directionList[i]);
    directionInput.appendChild(a);
  }
  const ListSort = document.createElement("input");
  ListSort.type = "text";
  ListSort.id = "Field";
  ListSort.appendChild(directionInput);
  ListSort.setAttribute("list", "direction");

  const blockTools = document.createElement("div");
  blockTools.id = "blockTools";

  const blockSort = document.createElement("div");
  blockSort.id = "blockTools";

  const nameToolsFiltrWith = document.createElement("p");
  nameToolsFiltrWith.id = "nameTools";
  nameToolsFiltrWith.textContent = "С:";

  const filtrWith = document.createElement("input");
  filtrWith.id = "Field";
  filtrWith.type = "date";
  filtrWith.addEventListener("change", inputValue(filtrWith));

  const nameToolsFiltrTo = document.createElement("p");
  nameToolsFiltrTo.id = "nameTools";
  nameToolsFiltrTo.textContent = "По:";

  const filtrTo = document.createElement("input");
  filtrTo.id = "Field";
  filtrTo.type = "date";
  filtrTo.value = "";
  filtrTo.addEventListener("change", inputValue(filtrTo));

  const blockToolsFiltr = document.createElement("div");
  blockToolsFiltr.id = "blockTools";

  const blockToolsFiltrSecond = document.createElement("div");
  blockToolsFiltrSecond.id = "blockTools";

  const buttonFiltr = document.createElement("button");
  buttonFiltr.id = "buttonFiltr";
  buttonFiltr.textContent = "Фильтровать";
  buttonFiltr.onclick = () => {
    filretFun(filtrWith, filtrTo);
  };

  const buttoncleanFiltr = document.createElement("button");
  buttoncleanFiltr.id = "buttoncleanFiltr";
  buttoncleanFiltr.onclick = () => {
    cleanFilretFun(filtrWith, filtrTo);
  };

  const imageClean = document.createElement("img");
  imageClean.src = "/img/clean.svg";
  buttoncleanFiltr.appendChild(imageClean);

  toolsFiltr.appendChild(blockToolsFiltr);
  toolsFiltr.appendChild(blockToolsFiltrSecond);
  toolsFiltr.appendChild(buttonFiltr);
  toolsFiltr.appendChild(buttoncleanFiltr);
  blockToolsFiltr.appendChild(nameToolsFiltrWith);
  blockToolsFiltr.appendChild(filtrWith);
  blockToolsFiltrSecond.appendChild(nameToolsFiltrTo);
  blockToolsFiltrSecond.appendChild(filtrTo);

  toolsSorting.appendChild(blockTools);
  toolsSorting.appendChild(blockSort);
  blockTools.appendChild(nameTools);
  blockTools.appendChild(fildSort);
  blockSort.appendChild(textTools);
  blockSort.appendChild(ListSort);

  panelTools.appendChild(toolsSorting);
  panelTools.appendChild(toolsFiltr);

  mainContainer.appendChild(panelTools);
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
    buttonEdit.onclick = () => editFun(index);

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
        Authorization: localStorage.getItem("token"),
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
  } else alert("Заполните все поля");

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
    if (a.value.trim() === "") a.value = a.placeholder;
  };

  return valueEvent;
};

const deleteFun = async (id) => {
  const modal = document.createElement("div");
  modal.id = "modal";
  const modalDelete = document.createElement("div");
  modalDelete.id = "modalEdit";
  modal.appendChild(modalDelete);
  mainContainer.appendChild(modal);
  modal.style.display = "block";

  const titleContainer = document.createElement("div");
  titleContainer.id = "titleContainer";
  const nameContainer = document.createElement("h1");
  nameContainer.id = "nameContainer";
  nameContainer.textContent = "Удалить прием";
  modalDelete.appendChild(titleContainer);
  titleContainer.appendChild(nameContainer);

  const contentDelete = document.createElement("div");
  contentDelete.id = "contentDelete";
  modalDelete.appendChild(contentDelete);

  const deleteMessage = document.createElement("p");
  deleteMessage.id = "dialogMessafe";
  deleteMessage.textContent = "Вы действительно хотите удалить прием?";
  contentDelete.appendChild(deleteMessage);

  const buttonAreaModal = document.createElement("div");
  buttonAreaModal.id = "buttonAreaModal";
  modalDelete.appendChild(buttonAreaModal);

  const closeEdit = document.createElement("button");
  closeEdit.id = "buttonCancel";
  closeEdit.textContent = "Отмена";
  closeEdit.onclick = () => {
    modal.style.display = "none";
  };
  buttonAreaModal.appendChild(closeEdit);

  const deleteButton = document.createElement("button");
  deleteButton.id = "buttonAccess";
  deleteButton.textContent = "Удалить";
  deleteButton.onclick = async () => {
    const resp = await fetch(
      `http://localhost:8080/api/entries/delete?id=${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: localStorage.getItem("token"),
          "Content-Type": "application/json;charset=utf-8",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    const result = await resp.json();
    listEntrie = result;

    render();

    modal.style.display = "none";
  };
  buttonAreaModal.appendChild(deleteButton);
};

const editFun = (index) => {
  const { nameUser, nameDoctor, date, complaints, id } = listEntrie[index];
  const modal = document.createElement("div");
  modal.id = "modal";
  const modalEdit = document.createElement("div");
  modalEdit.id = "modalEdit";
  modal.appendChild(modalEdit);
  mainContainer.appendChild(modal);
  modal.style.display = "block";

  const titleContainer = document.createElement("div");
  titleContainer.id = "titleContainer";
  const nameContainer = document.createElement("h1");
  nameContainer.id = "nameContainer";
  nameContainer.textContent = "Изменить прием";
  modalEdit.appendChild(titleContainer);
  titleContainer.appendChild(nameContainer);

  const contentEdit = document.createElement("div");
  contentEdit.id = "contentEdit";
  modalEdit.appendChild(contentEdit);

  const userNameBlock = document.createElement("div");
  userNameBlock.id = "blockEdit";
  contentEdit.appendChild(userNameBlock);

  const textNameBlock = document.createElement("p");
  textNameBlock.id = "nameBlock";
  textNameBlock.textContent = "Имя:";
  userNameBlock.appendChild(textNameBlock);

  const inputUserName = document.createElement("input");
  inputUserName.id = "inputEdit";
  inputUserName.placeholder = nameUser;
  inputUserName.addEventListener("change", inputValue(inputUserName));
  userNameBlock.appendChild(inputUserName);

  const doctorNameBlock = document.createElement("div");
  doctorNameBlock.id = "blockEdit";
  contentEdit.appendChild(doctorNameBlock);

  const textDoctorNameBlock = document.createElement("p");
  textDoctorNameBlock.id = "nameBlock";
  textDoctorNameBlock.textContent = "Врач:";
  doctorNameBlock.appendChild(textDoctorNameBlock);

  const inputDoctorName = document.createElement("input");
  inputDoctorName.id = "inputEdit";
  inputDoctorName.placeholder = nameDoctor;
  inputDoctorName.addEventListener("change", inputValue(inputDoctorName));
  doctorNameBlock.appendChild(inputDoctorName);

  const dateBlock = document.createElement("div");
  dateBlock.id = "blockEdit";
  contentEdit.appendChild(dateBlock);

  const textDateBlock = document.createElement("p");
  textDateBlock.id = "nameBlock";
  textDateBlock.textContent = "Дата:";
  dateBlock.appendChild(textDateBlock);

  const inputDate = document.createElement("input");
  inputDate.type = "date";
  inputDate.id = "inputEdit";
  inputDate.value = moment(date).format("YYYY-MM-DD");
  dateBlock.appendChild(inputDate);

  const complaintsBlock = document.createElement("div");
  complaintsBlock.id = "blockEdit";
  contentEdit.appendChild(complaintsBlock);

  const textComplaintsBlock = document.createElement("p");
  textComplaintsBlock.id = "nameBlock";
  textComplaintsBlock.textContent = "Жалобы:";
  complaintsBlock.appendChild(textComplaintsBlock);

  const inputcomplaints = document.createElement("input");
  inputcomplaints.id = "inputEdit";
  inputcomplaints.placeholder = complaints;
  inputcomplaints.addEventListener("change", inputValue(inputcomplaints));
  complaintsBlock.appendChild(inputcomplaints);

  const buttonAreaModal = document.createElement("div");
  buttonAreaModal.id = "buttonAreaModal";
  modalEdit.appendChild(buttonAreaModal);

  const closeEdit = document.createElement("button");
  closeEdit.id = "buttonCancel";
  closeEdit.textContent = "Отмена";
  closeEdit.onclick = () => {
    modal.style.display = "none";
  };
  buttonAreaModal.appendChild(closeEdit);

  const saveEdit = document.createElement("button");
  saveEdit.id = "buttonAccess";
  saveEdit.textContent = "Сохранить";
  saveEdit.onclick = () => {
    saveEditFun(inputUserName, inputDoctorName, date, inputcomplaints, id);
    modal.style.display = "none";
  };
  buttonAreaModal.appendChild(saveEdit);
};

const saveEditFun = async (
  inputUserName,
  inputDoctorName,
  date,
  inputcomplaints,
  id
) => {
  const editField = [inputUserName, inputDoctorName, date, inputcomplaints, id];
  editField.forEach((element) => {
    if (element.value == "") {
      element.value = element.placeholder;
    }
  });
  const resp = await fetch("http://localhost:8080/api/entries/update", {
    method: "PATCH",
    headers: {
      Authorization: localStorage.getItem("token"),
      "Content-Type": "application/json;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      nameUser: inputUserName.value,
      nameDoctor: inputDoctorName.value,
      date,
      complaints: inputcomplaints.value,
      id,
    }),
  });

  const result = await resp.json();
  listEntrie = result;

  render();
};

const filretFun = async (a, b) => {
  valueEvent = (event) => {
    a.value = event.target.value;
    b.value = event.target.value;
  };

  let urlFetch = "http://localhost:8080/api/entries/getAllEntries";
  let objFetch = {
    method: "GET",
    headers: {
      Authorization: localStorage.getItem("token"),
      "Content-Type": "application/json;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
    },
  };

  if (a.value !== "" || b.value !== "") {
    objFetch.method = "POST";
    urlFetch = "http://localhost:8080/api/entries/filter";
    objFetch.body = JSON.stringify({ dateStart: a.value, dateEnd: b.value });
  }

  const resp = await fetch(urlFetch, objFetch);
  const result = await resp.json();
  listEntrie = result;

  render();
};

const cleanFilretFun = async (a, b) => {
  valueEvent = (event) => {
    a.value = event.target.value;
    b.value = event.target.value;
  };
  a.value = "";
  b.value = "";
  const resp = await fetch("http://localhost:8080/api/entries/getAllEntries", {
    method: "GET",
    headers: {
      Authorization: localStorage.getItem("token"),
      "Content-Type": "application/json;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
    },
  });

  const result = await resp.json();
  listEntrie = result;

  render();
};
