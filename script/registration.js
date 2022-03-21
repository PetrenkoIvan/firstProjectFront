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

  const buttomLogin = document.createElement("button");
  buttomLogin.textContent = "Войти";
  buttomLogin.id = "buttomLogin";

  const repeatPassword = document.createElement("input");
  repeatPassword.type = "password";
  repeatPassword.id = "fieldLogIn";
  repeatPassword.placeholder = " Password";
  repeatPassword.addEventListener("change", inputValue(repeatPassword));

  const doneRegistrationButton = document.createElement("button");
  doneRegistrationButton.textContent = "Зарегистрироваться";
  doneRegistrationButton.id = "buttomLogin";
  doneRegistrationButton.onclick = () => {
    checkFun(fieldLogin, fieldPassword, repeatPassword),
    window.location.href = "personalArea.html";
  };

  const autorizationButton = document.createElement("button");
  autorizationButton.id = "buttomRegistration";
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

const registrationFun = () => {
  flag = 1;
  render();
};

const autorizationFun = () => {
  flag = 0;
  render();
};

const checkFun = (a, b, c) => {
  var pattern = /^[A-Za-z0-9]+$/;
  const checkLogin = pattern.test(a.value);
  const checkPassword = pattern.test(b.value);
  if (a.value.length < 6 || a.value.trim() === "" || checkLogin === false)
    alert("login");
  if (b.value.length < 6 || b.value.trim() === "" || checkPassword === false)
    alert("password");
  if (b.value !== c.value) alert("rep");

  console.log(a.value, b.value, c.value);
};

const inputValue = (a) => {
  const valueEvent = (event) => {
    a.value = event.target.value;
  };
  return valueEvent;
};
