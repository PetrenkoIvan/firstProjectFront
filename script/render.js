import {
  deleteFun,
  editFun,
} from "./controllers/entries_controllers.js";



export const render = (a) => {
  while (contentList.firstChild) {
    contentList.removeChild(contentList.lastChild);
  }
  a.map((item, index) => {
    let { nameUser, nameDoctor, date, complaints, id } = a[index];

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
    buttonEdit.onclick = () => editFun(index, a);

    const buttonDelete = document.createElement("button");
    buttonDelete.id = "buttonEntries";
    buttonDelete.onclick = () => {
      deleteFun(id, a);
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
