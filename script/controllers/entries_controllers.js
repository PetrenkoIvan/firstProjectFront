let sortObj = {
  filtrSort: "id",
  direction: "ASC",
};

import { render } from "../render.js";

const getEntries = async () => {
  let res = [];
  const resp = await fetch("http://localhost:8080/api/entries/getAllEntries", {
    method: "GET",
    headers: {
      Authorization: localStorage.getItem("token"),
      "Content-Type": "application/json;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
    },
  });
  const result = await resp.json();
  res = result;
  if (result.error) window.location.href = "loginPage.html";
  return res;
};

const addEntries = async (
  inputName,
  inputDoctor,
  inputDate,
  inputComplaints,
  a
) => {
  const checkPass = localStorage.getItem("token");
  const checkLog = localStorage.getItem("login");

  if (!checkLog || !checkPass) {
    window.location.href = "loginPage.html";
  }

  let nameClient = inputName.value;
  let nameDoctor = inputDoctor.value;
  let date = inputDate.value;
  let complaints = inputComplaints.value;

  if (nameDoctor === "None") {
    alert("Выберите врача");
  } else {
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

      a = result;
    } else alert("Заполните все поля");
  }

  inputName.value = "";
  nameDoctor = "";
  inputDoctor.value = "";
  date = "";
  inputDate.value = moment().format("YYYY-MM-DD");
  complaints = "";
  inputComplaints.value = "";
  render(a);
};

const deleteFun = async (id, a) => {
  const checkPass = localStorage.getItem("token");
  const checkLog = localStorage.getItem("login");

  if (!checkLog || !checkPass) {
    window.location.href = "loginPage.html";
  }

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
    a = result;

    modal.style.display = "none";

    render(a);
  };
  buttonAreaModal.appendChild(deleteButton);
};

const editFun = (index, a) => {
  const checkPass = localStorage.getItem("token");
  const checkLog = localStorage.getItem("login");

  if (!checkLog || !checkPass) {
    window.location.href = "loginPage.html";
  }

  const { nameUser, nameDoctor, date, complaints, id } = a[index];
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
    saveEditFun(
      inputUserName,
      inputDoctorName,
      inputDate,
      inputcomplaints,
      id,
      a,
      index
    );
    modal.style.display = "none";
  };
  buttonAreaModal.appendChild(saveEdit);
};

const saveEditFun = async (
  inputUserName,
  inputDoctorName,
  inputDate,
  inputcomplaints,
  id,
  a
) => {
  const checkPass = localStorage.getItem("token");
  const checkLog = localStorage.getItem("login");

  if (!checkLog || !checkPass) {
    window.location.href = "loginPage.html";
  }

  const editField = [
    inputUserName,
    inputDoctorName,
    inputDate,
    inputcomplaints,
  ];
  editField.forEach((element) => {
    if (!element.value) {
      element.value = element.placeholder;
      if (!element.placeholder) {
        element.value = element;
      }
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
      date: inputDate.value,
      complaints: inputcomplaints.value,
      id,
    }),
  });

  const result = await resp.json();
  a = result;

  render(a);
};

const inputValue = (a) => {
  const valueEvent = (event) => {
    a.value = event.target.value;
  };
  return valueEvent;
};

const sortFun = (a, list) => {
  const checkPass = localStorage.getItem("token");
  const checkLog = localStorage.getItem("login");

  if (!checkLog || !checkPass) {
    window.location.href = "loginPage.html";
  }

  const valueEvent = async (event) => {
    a.value = event.target.value;
    if (a.name === "selectInput") {
      const parent = a.parentNode;
      if (a.value === "Имя") sortObj.filtrSort = "nameUser";
      if (a.value === "Врач") sortObj.filtrSort = "nameDoctor";
      if (a.value === "Дата") sortObj.filtrSort = "date";

      if (a.value !== "None" || !a.value) {
        parent.nextSibling.style.display = "flex";
      } else {
        sortObj.filtrSort = "id";
        a.value = "";
        parent.nextSibling.style.display = "none";
        sortObj.direction = false;
      }
    } else {
      if (sortObj.filtrSort !== "id") a.parentNode.style.display = "flex";
      a.value !== "По возрастанию"
        ? (sortObj.direction = false)
        : (sortObj.direction = "ASC");
    }

    const resp = await fetch("http://localhost:8080/api/entries/sort", {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token"),
        "Content-Type": "application/json;charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        direction: sortObj.direction,
        filter: sortObj.filtrSort,
      }),
    });
    const result = await resp.json();
    list = result;
    render(list);
  };

  return valueEvent;
};

const filretFun = async (a, b, list) => {
  const checkPass = localStorage.getItem("token");
  const checkLog = localStorage.getItem("login");

  if (!checkLog || !checkPass) {
    window.location.href = "loginPage.html";
  }

  const valueEvent = (event) => {
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

  if (a.value || b.value) {
    objFetch.method = "POST";
    urlFetch = "http://localhost:8080/api/entries/filter";
    objFetch.body = JSON.stringify({ dateStart: a.value, dateEnd: b.value });
  }

  const resp = await fetch(urlFetch, objFetch);
  const result = await resp.json();
  list = result;

  render(list);
};

const cleanFilretFun = async (a, b, list) => {
  const checkPass = localStorage.getItem("token");
  const checkLog = localStorage.getItem("login");

  if (!checkLog || !checkPass) {
    window.location.href = "loginPage.html";
  }

  const button = document.getElementById("buttoncleanFiltr");
  const parent = button.parentNode;
  const mainParent = parent.parentNode;

  const valueEvent = (event) => {
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
  list = result;
  mainParent.childNodes[2].style.display = "flex";
  mainParent.lastChild.style.display = "none";

  render(list);
};

export {
  addEntries,
  deleteFun,
  editFun,
  inputValue,
  sortFun,
  filretFun,
  cleanFilretFun,
  getEntries,
};
