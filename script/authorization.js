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

  const buttomLogin = document.createElement("button");
  buttomLogin.textContent = "Войти";
  buttomLogin.id = "buttomLogin";

  const buttomRegistration = document.createElement("button");
  buttomRegistration.id = "buttomRegistration";
  buttomRegistration.onclick = () => {
    window.location.href = "registrationPage.html";
  };
  buttomRegistration.textContent = "Зарегистрироваться";

  header.appendChild(titlePage);
  loginArea.appendChild(titleArea);

  titlePage.textContent = "Войти в систему";
  titleArea.textContent = "Войти в систему";
  loginArea.appendChild(titleField);
  loginArea.appendChild(fieldLogin);
  loginArea.appendChild(titlePassword);
  loginArea.appendChild(fieldPassword);
  loginArea.appendChild(buttomLogin);
  loginArea.appendChild(buttomRegistration);
};

const regFun = () => {};

const autorizationFun = () => {};
