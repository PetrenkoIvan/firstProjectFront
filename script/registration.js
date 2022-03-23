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
  doneRegistrationButton.onclick = () => checkFun(fieldLogin, fieldPassword, repeatPassword);

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
  const pattern = /^[A-Za-z0-9]{6,40}$/;
  const paternPassword =
    /(?=^.{6,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
  const checkLogin = pattern.test(a.value);
  const checkPassword = paternPassword.test(b.value);
  if (checkLogin === false || a.value.trim() === "") {
    alert(
      "логин не может включать в себя русские символы и должен состоять более чем из 6 символов"
    );
  } else if (checkPassword === false || b.value.trim() === "") {
    alert(
      "пароль включает в себя латинские символы, хотя бы одну цифру и заглавную букву, должен состоять более чем из 6 символов"
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

    const result = await resp.json();
    a.value = "";
    b.value = "";
    c.value = "";
    login = "";
    password = "";

    if (resp.ok) {
      localStorage.setItem("token", result.token);
      localStorage.setItem("login", result.login);
      window.location.href = "personalArea.html";
    } else alert("Пользователь существует");
  }
};

const inputValue = (a) => {
  const valueEvent = (event) => {
    a.value = event.target.value;
  };
  return valueEvent;
};
