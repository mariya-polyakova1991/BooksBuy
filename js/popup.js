var popup = document.querySelector(".modal");
var openPopupButton = document.querySelector(".button-open");
var closePopupButton = popup.querySelector(".button-close");
const commentList = document.getElementById("comments-name");
const commentField = document.getElementById("comment-field");
const name = document.getElementById("login-field");
const email = document.getElementById("email-field");
const commentEmail = document.getElementById("comments-email");
const commentMessage = document.getElementById("comments-message");

openPopupButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal--show");
  commentList.classList.add("comment-list");
  commentEmail.classList.add("comment-list");
  commentMessage.classList.add("comment-list");
   commentList.textContent = `
  Your name:  ${name.value} `;
  commentEmail.textContent = `
  Your email: ${email.value} `;
  commentMessage.textContent = `
  Your message: ${commentField.value}`;
  name.value = "";
  email.value = "";
  commentField.value = "";
});

closePopupButton.addEventListener("click", function () {
  popup.classList.remove("modal--show");
});

document.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    popup.classList.remove("modal--show");
  }
});
