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
