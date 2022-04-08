const checkPass = localStorage.getItem("token");
const checkLog = localStorage.getItem("login");

if (!checkPass|| !checkLog) {
  window.location.href = "/pages/loginPage.html";
} else window.location.href = `pages/personalArea.html`;
