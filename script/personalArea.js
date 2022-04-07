import {
  addEntries,
  sortFun,
  filretFun,
  getEntries,
  cleanFilretFun,
  inputValue,
} from "./controllers/entries_controllers.js";

import { render } from "./render.js";

import { openFunSort, openFun } from "./button_function/buttonFunction.js";

let listEntrie = {};
listEntrie = getEntries(listEntrie);

const checkPass = localStorage.getItem("token");
const checkLog = localStorage.getItem("login");

if (!localStorage.getItem("token") || !localStorage.getItem("token"))
  window.location.href = "loginPage.html";

window.onload = async () => {
  listEntrie = await getEntries();
  const mainContainer = document.getElementById("mainContainer");
  const createContainer = document.createElement("div");
  createContainer.id = "createContainer";

  mainContainer.appendChild(createContainer);

  if (!checkLog || !checkPass) {
    window.location.href = "loginPage.html";
  }

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

  const inputDoctor = document.createElement("SELECT");
  inputDoctor.setAttribute("id", "Field");
  inputDoctor.name = "inputDoctor";

  const doctorList = ["None", "Петров Петр Петрович", "Иванов Иван Иванович"];
  for (let i = 0; i < doctorList.length; i++) {
    const option = document.createElement("option");
    option.setAttribute("value", doctorList[i]);
    option.textContent = doctorList[i];

    inputDoctor.appendChild(option);
  }

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
    addEntries(inputName, inputDoctor, inputDate, inputComplaints, listEntries);
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
  toolsFiltr.style.display = "none";

  const toolsSorting = document.createElement("div");
  toolsSorting.id = "toolsContainer";

  const buttonOpenSort = document.createElement("button");
  buttonOpenSort.id = "buttonOpenSort";
  buttonOpenSort.textContent = "Добавить сортировку:";
  buttonOpenSort.onclick = () => openFunSort(blockToolsSort);
  panelTools.appendChild(buttonOpenSort);

  const imageOpenSort = document.createElement("img");
  imageOpenSort.src = "/img/Open.svg";
  buttonOpenSort.appendChild(imageOpenSort);

  const buttonOpenFilter = document.createElement("button");
  buttonOpenFilter.id = "openButton";
  buttonOpenFilter.textContent = "Добавить фильтр по дате:";
  panelTools.appendChild(buttonOpenFilter);
  buttonOpenFilter.onclick = () => openFun(toolsFiltr);

  const imageOpenFiltr = document.createElement("img");
  imageOpenFiltr.src = "/img/Open.svg";
  buttonOpenFilter.appendChild(imageOpenFiltr);

  const nameTools = document.createElement("p");
  nameTools.id = "nameTools";
  nameTools.textContent = "Сортировать по:";

  const selectInput = document.createElement("SELECT");
  selectInput.setAttribute("id", "Field");
  selectInput.name = "selectInput";

  const sortList = ["None", "Имя", "Врач", "Дата"];
  for (let i = 0; i < sortList.length; i++) {
    const option = document.createElement("option");
    option.setAttribute("value", sortList[i]);
    option.textContent = sortList[i];

    selectInput.appendChild(option);
  }
  selectInput.addEventListener("change", sortFun(selectInput));

  const textTools = document.createElement("p");
  textTools.id = "nameTools";
  textTools.textContent = "Направление:";

  const ListSort = document.createElement("SELECT");
  ListSort.name = "ListSort";

  const directionList = ["По возрастанию", "По убыванию"];
  ListSort.id = "Field";

  for (let i = 0; i < directionList.length; i++) {
    const option = document.createElement("option");
    option.setAttribute("value", directionList[i]);
    option.textContent = directionList[i];

    ListSort.appendChild(option);
  }
  ListSort.addEventListener("change", sortFun(ListSort));

  const blockToolsSort = document.createElement("div");
  blockToolsSort.id = "blockTools";
  blockToolsSort.className = "blockSort";

  const blockSort = document.createElement("div");
  blockSort.id = "blockTools";
  // blockSort.className = "blockSort";
  blockSort.style.display = "none";

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

  toolsSorting.appendChild(blockToolsSort);
  toolsSorting.appendChild(blockSort);
  blockToolsSort.appendChild(nameTools);
  blockToolsSort.appendChild(selectInput);
  blockSort.appendChild(textTools);
  blockSort.appendChild(ListSort);

  panelTools.appendChild(buttonOpenSort);
  panelTools.appendChild(toolsSorting);
  panelTools.appendChild(buttonOpenFilter);
  panelTools.appendChild(toolsFiltr);

  mainContainer.appendChild(panelTools);
  mainContainer.appendChild(listEntries);

  const contentList = document.createElement("div");
  contentList.id = "contentList";
  listEntries.appendChild(contentList);

  const divEmpty = document.createElement("div");
  divEmpty.id = "divEmpty";

  columnArea.appendChild(nameUserColumn);
  columnArea.appendChild(doctorNameColumn);
  columnArea.appendChild(dateColumn);
  columnArea.appendChild(complaintsColumn);
  columnArea.appendChild(divEmpty);
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

  render(listEntrie);
};

const winsize = () => {
  const block = document.getElementsByClassName("blockSort");
  window.screen.width < 580
    ? (block.blockTools.style.display = "none")
    : (block.blockTools.style.display = "flex");
};

window.addEventListener("resize", winsize);
