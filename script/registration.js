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
  fieldLogin.addEventListener("change", inputValue(fieldLogin));

  const fieldPassword = document.createElement("input");
  fieldPassword.type = "password";
  fieldPassword.id = "fieldLogIn";
  fieldPassword.placeholder = "Password";
  fieldPassword.addEventListener("change", inputValue(fieldPassword));

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

  const buttonLogin = document.createElement("button");
  buttonLogin.textContent = "Войти";
  buttonLogin.id = "buttonLogin";

  const repeatPassword = document.createElement("input");
  repeatPassword.type = "password";
  repeatPassword.id = "fieldLogIn";
  repeatPassword.placeholder = " Password";
  repeatPassword.addEventListener("change", inputValue(repeatPassword));

  const doneRegistrationButton = document.createElement("button");
  doneRegistrationButton.textContent = "Зарегистрироваться";
  doneRegistrationButton.id = "buttonLogin";
  doneRegistrationButton.onclick = () => {
    checkFun(fieldLogin, fieldPassword, repeatPassword),
      (window.location.href = "personalArea.html");
  };

  const autorizationButton = document.createElement("button");
  autorizationButton.id = "buttonRegistration";
  autorizationButton.textContent = "Авторизоваться";
  autorizationButton.onclick = () => {
    window.location.href = "loginPage.html";
  };
  header.appendChild(titlePage);
  loginArea.appendChild(titleArea);
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
};

const checkFun = (a, b, c) => {
  const pattern = /^[A-Za-z0-9]+$/;
  const checkLogin = pattern.test(a.value);
  const checkPassword = pattern.test(b.value);
  if (a.value.length < 6 || a.value.trim() === "" || checkLogin === false)
    alert("логин должен включать в себя не менее 6 символов");
  if (b.value.length < 6 || b.value.trim() === "" || checkPassword === false)
    alert("пароль должен включать в себя не менее 6 символов");
  if (b.value !== c.value) alert("пароли не совпадают");
};

const inputValue = (a) => {
  const valueEvent = (event) => {
    a.value = event.target.value;
  };
  return valueEvent;
};
