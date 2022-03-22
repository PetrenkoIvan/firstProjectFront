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

  const buttonLogin = document.createElement("button");
  buttonLogin.textContent = "Войти";
  buttonLogin.id = "buttonLogin";
  buttonLogin.onclick = () => {
    loginFun(fieldLogin, fieldPassword);
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

const loginFun = async (a,b) => { 
  const pattern = /^[A-Za-z0-9]+$/;
  const checkLogin = pattern.test(a.value);
  const checkPassword = pattern.test(b.value);
  if (a.value.length < 6 || a.value.trim() === "" || checkLogin === false)
    alert("логин должен включать в себя не менее 6 символов");
  if (b.value.length < 6 || b.value.trim() === "" || checkPassword === false)
    alert("пароль должен включать в себя не менее 6 символов");
    
  try {
    const resp = await fetch("http://localhost:8080/api/users/login", {
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
    login = "";
    password = "";

    if (resp.ok == true) {window.location.href = "personalArea.html"} else {
      alert("Проверте правильность введенных данных")
    }
  } catch (error) {
    console.log(error);
  }
};

const inputValue = (a) => {
  const valueEvent = (event) => {
    a.value = event.target.value;
  };
  return valueEvent;
};
