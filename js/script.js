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
var priceTable = document.querySelector("#priceTable");
var priceBtn1 = document.querySelector("#priceBtn1");
var priceBtn2 = document.querySelector("#priceBtn2");
var priceBtn3 = document.querySelector("#priceBtn3");
var priceSlide1 = document.querySelector("#priceSlide1");
var priceSlide2 = document.querySelector("#priceSlide2");
var priceSlide3 = document.querySelector("#priceSlide3");

if (window.matchMedia('(max-width: 759px)').matches) {
  if (priceTable) {
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
}

//upload__settings--------------------------------------------------------------
var upload = document.querySelector(".upload");
var uploadCropSvg = document.querySelector("#uploadCropSvg");
var uploadFillSvg = document.querySelector("#uploadFillSvg");
var uploadContrastSvg = document.querySelector("#uploadContrastSvg");
var uploadCropRange = document.querySelector("#uploadCropRange");
var uploadFillRange = document.querySelector("#uploadFillRange");
var uploadContrastRange = document.querySelector("#uploadContrastRange");

if (window.matchMedia('(max-width: 759px)').matches) {
  if (upload) {
    uploadCropSvg.addEventListener("click", function(evt) {
      if (uploadFillSvg.classList.contains("upload__svg--active")) {
        uploadFillSvg.classList.remove("upload__svg--active");
        uploadFillRange.classList.add("upload__range--js-hidden");
        uploadCropSvg.classList.add("upload__svg--active");
        uploadCropRange.classList.remove("upload__range--js-hidden");
      };

      if (uploadContrastSvg.classList.contains("upload__svg--active")) {
        uploadContrastSvg.classList.remove("upload__svg--active");
        uploadContrastRange.classList.add("upload__range--js-hidden");
        uploadCropSvg.classList.add("upload__svg--active");
        uploadCropRange.classList.remove("upload__range--js-hidden");
      };
    });

    uploadFillSvg.addEventListener("click", function(evt) {
      if (uploadCropSvg.classList.contains("upload__svg--active")) {
        uploadCropSvg.classList.remove("upload__svg--active");
        uploadCropRange.classList.add("upload__range--js-hidden");
        uploadFillSvg.classList.add("upload__svg--active");
        uploadFillRange.classList.remove("upload__range--js-hidden");
      };

      if (uploadContrastSvg.classList.contains("upload__svg--active")) {
        uploadContrastSvg.classList.remove("upload__svg--active");
        uploadContrastRange.classList.add("upload__range--js-hidden");
        uploadFillSvg.classList.add("upload__svg--active");
        uploadFillRange.classList.remove("upload__range--js-hidden");
      };
    });

    uploadContrastSvg.addEventListener("click", function(evt) {
      if (uploadCropSvg.classList.contains("upload__svg--active")) {
        uploadCropSvg.classList.remove("upload__svg--active");
        uploadCropRange.classList.add("upload__range--js-hidden");
        uploadContrastSvg.classList.add("upload__svg--active");
        uploadContrastRange.classList.remove("upload__range--js-hidden");
      };

      if (uploadFillSvg.classList.contains("upload__svg--active")) {
        uploadFillSvg.classList.remove("upload__svg--active");
        uploadFillRange.classList.add("upload__range--js-hidden");
        uploadContrastSvg.classList.add("upload__svg--active");
        uploadContrastRange.classList.remove("upload__range--js-hidden");
      };
    });
  }
}
