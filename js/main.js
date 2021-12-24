if (document.querySelector(".info-carousel")) {
  var swiperInfo = new Swiper(".info-carousel", {
    spaceBetween: 0,
    slidesPerView: "auto",
    allowTouchMove: true,
    disableInteraction: true,
  });
}

if (document.querySelector("#home-banner-gallery")) {
  var galleryThumbs = new Swiper("#home-banner-info", {
    slidesPerView: 5,
    spaceBetween: 0,
    freeMode: true,
    loop: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var galleryTop = new Swiper("#home-banner-gallery", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoHeight: true,
    speed: 1000,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 2000,
      disableInteraction: false,
    },
    thumbs: {
      swiper: galleryThumbs,
    },
  });
}

/* Open Form */
window.addEventListener("load", () => {
  const location = document.querySelector(".location-main");
  const locationCaret = document.querySelector(".caret");
  const formOpen = document.querySelector(".open-form");
  const formClose = document.querySelector(".close-form");
  const overlay = document.querySelector(".overlay");
  const dropdownSelect = document.querySelector(".dropdown-select");
  const dropdownValue = document.querySelector(".dropdown-value");
  const dropdownList = document.querySelector(".dropdown-list");
  const dropdownItem = document.querySelectorAll(".dropdown-item");
  location.addEventListener("click", () => {
    formOpen.classList.add("show");
    locationCaret.classList.add("active");
    overlay.classList.add("show");
    document.body.classList.add("block");
  });
  formClose.addEventListener("click", () => {
    formOpen.classList.remove("show");
    locationCaret.classList.remove("active");
    overlay.classList.remove("show");
    document.body.classList.remove("block");
  });
  dropdownSelect.addEventListener("click", () => {
    dropdownList.classList.toggle("is-show");
  });

  function selectValue(e) {
    const { value } = e.target.dataset;
    dropdownValue.textContent = value;
    dropdownList.classList.remove("is-show");
  }
  dropdownItem.forEach((n) => n.addEventListener("click", selectValue));
});

/* Swiper Product */

var swiperProduct = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 0,
  slidesPerGroup: 5,
  loop: true,
  loopFillGroupWidthBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* Swiper Computer */

var swiperComputer = new Swiper(".computer-slide", {
  slidesPerView: 5,
  spaceBetween: 0,
  slidesPerGroup: 5,
  loop: true,
  loopFillGroupWidthBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiperPK = new Swiper(".pk-slide", {
  slidesPerView: 5,
  spaceBetween: 0,
  slidesPerGroup: 5,
  loop: true,
  loopFillGroupWidthBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiperDHTM = new Swiper(".dh1", {
  slidesPerView: 4,
  spaceBetween: 0,
  slidesPerGroup: 4,
  loop: true,
  autoHeight: "auto",
  loopFillGroupWidthBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* Tab UI Clock */

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const clocks = $$(".clock-main");

tabs.forEach((tab, index) => {
  const clock = clocks[index];

  tab.onclick = function () {
    $(".tab-item.active").classList.remove("active");
    $(".clock-main.active").classList.remove("active");
    this.classList.add("active");
    clock.classList.add("active");
  };
});

/* Blog Slide */

var swiperBlog = new Swiper(".blog-slide", {
  spaceBetween: 0,
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* Footer view more */

const viewMore = document.querySelector(".footer-viewmore");
const footerMenu = document.querySelector(".footer-menu");

viewMore.addEventListener("click", () => {
  viewMore.classList.add("active");
  footerMenu.classList.add("active");
});
