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

