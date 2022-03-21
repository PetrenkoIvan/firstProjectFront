let flag = 1;
window.onload = async () => {
  const mainContainer = document.getElementById("mainContainer");
  const loginArea = document.createElement("div");
  loginArea.id = "loginArea";

  mainContainer.appendChild(loginArea);

  render();
};

let render = () => {
  const header = document.getElementById("namePage");

  const titlePage = document.createElement("p");

  const fieldLogin = document.createElement("input");
  fieldLogin.type = "text";
  fieldLogin.id = "fieldLogIn";
  fieldLogin.placeholder = "Login";

  const fieldPassword = document.createElement("input");
  fieldPassword.type = "text";
  fieldPassword.id = "fieldLogIn";
  fieldPassword.placeholder = "Password";

  const titleArea = document.createElement("p");
  titleArea.id = "titleArea";

  const titleField = document.createElement("p");
  titleField.textContent = "Login";
  titleField.id = "titleField";

  const titlePassword = document.createElement("p");
  titlePassword.textContent = "Password";
  titlePassword.id = "titleField";

  const titlerepeatPassword = document.createElement("p");
  titlerepeatPassword.textContent = " Repeat password:";
  titlerepeatPassword.id = "titleField";

  const buttomLogin = document.createElement("button");
  buttomLogin.textContent = "Войти";
  buttomLogin.id = "buttomLogin";

  const repeatPassword = document.createElement("input");
  repeatPassword.type = "text";
  repeatPassword.id = "fieldLogIn";
  repeatPassword.placeholder = " Password";

  const doneRegistrationButton = document.createElement("button");
  doneRegistrationButton.textContent = "Зарегистрироваться";
  doneRegistrationButton.id = "buttomLogin";

  const autorizationButton = document.createElement("button");
  autorizationButton.id = "buttomRegistration";
  autorizationButton.textContent = "Авторизоваться";
  autorizationButton.onclick = () => {
    window.location.href = "loginPage.html";
  };
  header.appendChild(titlePage);
  loginArea.appendChild(titleArea);
  if (flag === 1) {
    titlePage.textContent = "Зарегистрироваться в системе";
    titleArea.textContent = "Регистрация";
    loginArea.appendChild(titleField);
    loginArea.appendChild(fieldLogin);
    loginArea.appendChild(titlePassword);
    loginArea.appendChild(fieldPassword);
    loginArea.appendChild(titlerepeatPassword);
    loginArea.appendChild(repeatPassword);
    loginArea.appendChild(doneRegistrationButton);
    loginArea.appendChild(autorizationButton);
  }
};

const registrationFun = () => {
  flag = 1;
  render();
};

const autorizationFun = () => {
  flag = 0;
  render();
};
