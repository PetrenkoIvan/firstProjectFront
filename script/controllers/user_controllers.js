const loginFun = async (a, b) => {
  try {
    const resp = await fetch("http://localhost:8080/api/users/login", {
      method: "POST",
      headers: {
        authorization: localStorage.getItem("token"),
        "Content-Type": "application/json;charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },

      body: JSON.stringify({
        login: a.value,
        password: b.value,
      }),
    });
    let result = await resp.json();
    a.value = "";
    b.value = "";

    if (result.token !== undefined && result.login !== undefined) {
      localStorage.setItem("token", result.token);
      localStorage.setItem("login", result.login);
      window.location.href = "personalArea.html";
    } else alert("Проверте правильность введенных данных");
  } catch (error) {
  }
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
    const resp = await fetch("http://localhost:8080/api/users/registration", {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token"),
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

    localStorage.setItem("token", result.token);
    localStorage.setItem("login", result.login);
    const checkPass = result.token;
    const checkLog = result.login;

    if (checkPass !== undefined && checkLog !== undefined) {
      window.location.href = "personalArea.html";
    } else alert("Логин занят");
  }
};

const inputValue = (a) => {
  const valueEvent = (event) => {
    a.value = event.target.value;
  };
  return valueEvent;
};

export { inputValue, loginFun, checkFun };
