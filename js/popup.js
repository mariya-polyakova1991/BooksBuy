var popup = document.querySelector(".modal");
var openPopupButton = document.querySelector(".button-open");
var closePopupButton = popup.querySelector(".button-close");
const commentList = document.getElementById("comment-list");
const commentField = document.getElementById("comment-field");
const name = document.getElementById("login-field");
const email = document.getElementById("email-field");

openPopupButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal--show");
  commentList.classList.add("comment-list");
  commentList.textContent =
    "Your name: " +
    name.value +
    ", Your email: " +
    email.value +
    ", Your message: " +
    commentField.value;

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
