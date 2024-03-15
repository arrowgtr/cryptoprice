// Selecting elements from the DOM
const loginBtn = document.getElementById("loginBtn");
const loginPopup = document.getElementById("loginPopup");
const registerLink = document.getElementById("registerLink");
const LoginLink = document.getElementById("LoginLink"); // Should be lowercase "loginLink"
const registerPopup = document.getElementById("registerPopup");
const closeBtns = document.querySelectorAll(".close");

// Adding event listeners
loginBtn.addEventListener("click", () => {
  loginPopup.style.display = "block";
});

registerLink.addEventListener("click", (e) => {
  e.preventDefault();
  loginPopup.style.display = "none";
  registerPopup.style.display = "block";
});

LoginLink.addEventListener("click", function (e) { // Change "LoginLink" to "loginLink"
  e.preventDefault();
  loginPopup.style.display = "block";
  registerPopup.style.display = "none";
});

closeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    loginPopup.style.display = "none";
    registerPopup.style.display = "none";
  });
});

// Placeholder removal on input
document.addEventListener('DOMContentLoaded', function() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    usernameInput.addEventListener('input', function() {
      this.removeAttribute('placeholder');
    });

    passwordInput.addEventListener('input', function() {
      this.removeAttribute('placeholder');
    });
});

 // Add click event listener to the login button
    button.addEventListener('click', function() {
        // Display the login popup
        loginPopup.style.display = 'block';
    });

    // Assuming login is successful, you can display the success message
// Get the success message element
const successMessage = document.getElementById('successMessage');

// Display the success message
successMessage.style.display = 'block';


// Assuming login is successful and you have the username
const username = "arrow";

// Save the username in local storage
localStorage.setItem("username", username);


// Retrieve the saved username from local storage
const savedUsername = localStorage.getItem("username");

// Check if the username exists in local storage
if (savedUsername) {
    // Use the saved username for any purpose, such as displaying a personalized welcome message
    console.log("Welcome back, " + savedUsername + "!");
} else {
    // Handle the case where no username is saved
    console.log("No saved username found.");
}

const crypto = require('crypto');

// Hashing function
function hashPassword(password) {
    const hash = crypto.createHash('sha256');
    hash.update(password);
    return hash.digest('hex');
}

// Example usage
const plaintextPassword = 'password123';
const hashedPassword = hashPassword(plaintextPassword);
console.log('Hashed password:', hashedPassword);


