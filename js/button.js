var booksMenu = document.querySelectorAll(".booksMenu"),
  list = document.querySelectorAll(".mainTitle-books");

function deleteClass() {
  booksMenu.forEach(function (e) {
    e.classList.remove("btn-active");
  }),
    list.forEach(function (e) {
      e.classList.remove("books-active");
    });
}
booksMenu.forEach(function (e, s) {
  e.addEventListener("click", function () {
    deleteClass(),
      booksMenu[s].classList.add("btn-active"),
      list[s].classList.add("books-active");
  });
});

// slider=================================

var prev = document.querySelector(".prev");
var next = document.querySelector(".next");
var slides = document.querySelectorAll(".item");

var slideIndex = 1;
showSlides(slideIndex);

next.addEventListener("click", function plusSlide() {
  showSlides((slideIndex += 1));
});

prev.addEventListener("click", function minusSlide() {
  showSlides((slideIndex -= 1));
});

function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  slides.forEach(function (elem) {
    elem.style.display = "none";
  });
  slides[slideIndex - 1].style.display = "block";
}
