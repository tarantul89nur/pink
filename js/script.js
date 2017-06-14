var menuDrop = document.querySelector(".main-nav__toggle");
var menuHeader = document.querySelector(".main-nav");
var menuList = document.querySelector(".main-nav__list");

menuDrop.classList.remove("main-nav__toggle--close");
menuHeader.classList.remove("main-nav--menu-open");
menuList.classList.add("js-hidden");

menuDrop.addEventListener("click", function(evt) {
  evt.preventDefault();
  menuDrop.classList.toggle("main-nav__toggle--close");

  if (menuDrop.classList.contains("main-nav__toggle--close")) {
    menuList.classList.remove("js-hidden");
    menuHeader.classList.add("main-nav--menu-open");
  } else {
    menuList.classList.add("js-hidden");
    menuHeader.classList.remove("main-nav--menu-open");
  };
});
