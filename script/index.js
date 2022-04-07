const checkPass = localStorage.getItem("token");
const checkLog = localStorage.getItem("login");

if (!localStorage.getItem("token") || !localStorage.getItem("token")) {
  window.location.href = `page/loginPage.html`;
} else window.location.href = `pages/personalArea.html`;
