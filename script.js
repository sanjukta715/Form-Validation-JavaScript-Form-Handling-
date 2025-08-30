const form = document.getElementById("registrationForm");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");
const confirmPasswordField = document.getElementById("confirmPassword");
const messageField = document.getElementById("message");

function validateForm(event) {
  event.preventDefault(); 
  let isValid = true;

  document.querySelectorAll(".error").forEach(error => error.textContent = "");

  if (nameField.value.trim() === "") {
    setError(nameField, "Name cannot be empty");
    isValid = false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (emailField.value.trim() === "") {
    setError(emailField, "Email cannot be empty");
    isValid = false;
  } else if (!emailField.value.match(emailPattern)) {
    setError(emailField, "Enter a valid email");
    isValid = false;
  }

  if (passwordField.value.trim() === "") {
    setError(passwordField, "Password cannot be empty");
    isValid = false;
  } else if (passwordField.value.length < 6) {
    setError(passwordField, "Password must be at least 6 characters");
    isValid = false;
  }

  if (confirmPasswordField.value.trim() === "") {
    setError(confirmPasswordField, "Please confirm your password");
    isValid = false;
  } else if (passwordField.value !== confirmPasswordField.value) {
    setError(confirmPasswordField, "Passwords do not match");
    isValid = false;
  }

  if (messageField.value.trim() === "") {
    setError(messageField, "Message cannot be empty");
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
    form.reset();
  }
}

function setError(inputElement, message) {
  const errorElement = inputElement.parentElement.querySelector(".error");
  errorElement.textContent = message;
}

form.addEventListener("submit", validateForm);
