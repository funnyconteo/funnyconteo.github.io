var mainNav = document.querySelector(".site-list__user-menu");
var siteList = document.querySelector(".main-nav__list");
var Button = document.querySelector(".main-nav__toggle");
var Width = document.body.clientWidth;

window.addEventListener('resize', function() {
    var Width = document.body.clientWidth;
    if (Width < 768) {
        mainNav.classList.add("hide");
        Button.classList.add("main-nav__toggle--active");
    }
});


Button.classList.remove("hide")

var showList = function(evt) {
  evt.preventDefault();
  mainNav.classList.toggle("hide");
  Button.classList.toggle("main-nav__toggle--active");
};

Button.addEventListener("click", showList);
