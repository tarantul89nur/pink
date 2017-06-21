//menu--------------------------------------------------------------------------
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

//price-slider------------------------------------------------------------------
var priceBtn1 = document.querySelector("#priceBtn1");
var priceBtn2 = document.querySelector("#priceBtn2");
var priceBtn3 = document.querySelector("#priceBtn3");
var priceSlide1 = document.querySelector("#priceSlide1");
var priceSlide2 = document.querySelector("#priceSlide2");
var priceSlide3 = document.querySelector("#priceSlide3");

if (window.matchMedia('(max-width: 759px)').matches)
{
  priceBtn1.addEventListener("click", function(evt) {
    if (priceBtn2.classList.contains("price__btn--active")) {
      priceBtn2.classList.remove("price__btn--active");
      priceBtn1.classList.add("price__btn--active");
      priceSlide1.classList.remove("js-absolute-left");
      priceSlide1.classList.add("js-visible-column");
      priceSlide2.classList.add("js-absolute-right");
      priceSlide2.classList.remove("js-visible-column");
      priceSlide3.classList.remove("js-absolute-right");
    };

    if (priceBtn3.classList.contains("price__btn--active")) {
      priceBtn3.classList.remove("price__btn--active");
      priceBtn1.classList.add("price__btn--active");
      priceSlide1.classList.add("js-visible-column");
      priceSlide2.classList.remove("js-absolute-left");
      priceSlide2.classList.add("js-absolute-right");
      priceSlide3.classList.remove("js-visible-column");
    };
  });

  priceBtn2.addEventListener("click", function(evt) {
    if (priceBtn1.classList.contains("price__btn--active")) {
      priceBtn1.classList.remove("price__btn--active");
      priceBtn2.classList.add("price__btn--active");
      priceSlide1.classList.add("js-absolute-left");
      priceSlide1.classList.remove("js-visible-column");
      priceSlide2.classList.add("js-visible-column");
      priceSlide2.classList.remove("js-absolute-right");
      priceSlide3.classList.add("js-absolute-right");
    };

    if (priceBtn3.classList.contains("price__btn--active")) {
      priceBtn3.classList.remove("price__btn--active");
      priceBtn2.classList.add("price__btn--active");
      priceSlide1.classList.add("js-absolute-left");
      priceSlide2.classList.add("js-visible-column");
      priceSlide2.classList.remove("js-absolute-left");
      priceSlide3.classList.add("js-absolute-right");
      priceSlide3.classList.remove("js-visible-column");
    };
  });

  priceBtn3.addEventListener("click", function(evt) {
    if (priceBtn1.classList.contains("price__btn--active")) {
      priceBtn1.classList.remove("price__btn--active");
      priceBtn3.classList.add("price__btn--active");
      priceSlide1.classList.remove("js-visible-column");
      priceSlide2.classList.add("js-absolute-left");
      priceSlide2.classList.remove("js-absolute-right");
      priceSlide3.classList.add("js-visible-column");
    };

    if (priceBtn2.classList.contains("price__btn--active")) {
      priceBtn2.classList.remove("price__btn--active");
      priceBtn3.classList.add("price__btn--active");
      priceSlide1.classList.remove("js-absolute-left");
      priceSlide2.classList.remove("js-visible-column");
      priceSlide2.classList.add("js-absolute-left");
      priceSlide3.classList.remove("js-absolute-right");
      priceSlide3.classList.add("js-visible-column");
    };
  });
}
