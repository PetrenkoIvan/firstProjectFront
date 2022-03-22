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
    checkFun(fieldLogin, fieldPassword, repeatPassword);
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

const checkFun = async (a, b, c) => {
  const pattern = /^[A-Za-z0-9]+$/;
  const checkNum = b.value.match(/\d+/);
  const checkLogin = pattern.test(a.value);
  const checkPassword = pattern.test(b.value);
  if (checkLogin === false || checkPassword === false) {
    alert("логин и пароль не должны включать в себя русские буквы");
  } else if (a.value.length < 6 || a.value.trim() === "") {
    alert("логин должен включать в себя не менее 6 символов");
  } else if (
    b.value.length < 6 ||
    b.value.trim() === "" ||
    checkPassword === false ||
    !checkNum
  ) {
    alert(
      "пароль должен включать в себя не менее 6 символов и хотя бы одну цифру"
    );
  } else if (b.value !== c.value) {
    alert("пароли не совпадают");
  } else {
    const resp = await fetch("http://localhost:8080/api/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },

      body: JSON.stringify({
        login: a.value,
        password: b.value,
      }),
    });

    a.value = "";
    b.value = "";
    c.value = "";
    login = "";
    password = "";

    window.location.href = "personalArea.html";
  }
};

const inputValue = (a) => {
  const valueEvent = (event) => {
    a.value = event.target.value;
  };
  return valueEvent;
};
