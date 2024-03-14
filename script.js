// JavaScript functionality goes here
// For example, fetching data from the backend, handling user interactions, etc.
const loginBtn = document.getElementById("loginBtn");
const loginPopup = document.getElementById("loginPopup");
const registerLink = document.getElementById("registerLink");
const registerPopup = document.getElementById("registerPopup");
const closeBtns = document.querySelectorAll(".close");

loginBtn.addEventListener("click", () => {
  loginPopup.style.display = "block";
});

registerLink.addEventListener("click", (e) => {
  e.preventDefault();
  loginPopup.style.display = "none";
  registerPopup.style.display = "block";
});

closeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    loginPopup.style.display = "none";
    registerPopup.style.display = "none";
  });
});
