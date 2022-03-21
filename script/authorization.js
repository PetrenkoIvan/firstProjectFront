let flag = 0;

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
  fieldPassword.type = "password";
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

  const buttonLogin = document.createElement("button");
  buttonLogin.textContent = "Войти";
  buttonLogin.id = "buttonLogin";
  buttonLogin.onclick = () => {
    window.location.href = "personalArea.html";
  };

  const buttonRegistration = document.createElement("button");
  buttonRegistration.id = "buttonRegistration";
  buttonRegistration.onclick = () => {
    window.location.href = "registrationPage.html";
  };
  buttonRegistration.textContent = "Зарегистрироваться";

  header.appendChild(titlePage);
  loginArea.appendChild(titleArea);

  titlePage.textContent = "Войти в систему";
  titleArea.textContent = "Войти в систему";
  loginArea.appendChild(titleField);
  loginArea.appendChild(fieldLogin);
  loginArea.appendChild(titlePassword);
  loginArea.appendChild(fieldPassword);
  loginArea.appendChild(buttonLogin);
  loginArea.appendChild(buttonRegistration);
};

const regFun = () => {};

const autorizationFun = () => {};
