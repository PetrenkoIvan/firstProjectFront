const openFunSort = (a) => {
  const checkPass = localStorage.getItem("token");
  const checkLog = localStorage.getItem("login");

  if (!checkLog || !checkPass) {
    window.location.href = "loginPage.html";
  }

  const button = document.getElementById("buttonOpenSort");
  parent = button.parentNode;

  a.style.display === "flex"
    ? (a.style.display = "none")
    : (a.style.display = "flex");
};

const openFun = (a) => {
  const checkPass = localStorage.getItem("token");
  const checkLog = localStorage.getItem("login");

  if (!checkLog || !checkPass) {
    window.location.href = "loginPage.html";
  }

  const button = document.getElementById("openButton");
  parent = button.parentNode;

  a.style.display === "none"
    ? ((a.style.display = "flex"), (button.style.display = "none"))
    : (a.style.display = "none");
};

export { openFunSort, openFun };
