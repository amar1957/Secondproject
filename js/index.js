let toggles = document.querySelectorAll(".toggle");
let menu = document.querySelector(".menu");
let nav = document.querySelector(".nav");
let landing = document.querySelector(".landing");
let hero = document.querySelector(".hero");
let contents = document.querySelectorAll(".content");
const mediaQuery = window.matchMedia("(max-width: 768px)");
const mobile = window.matchMedia("(max-width: 992px)");
mediaQuery.addEventListener("change", query);
window.addEventListener("scroll", function () {
  nav.style.right = "-250px";
  landing.style.opacity = "0";
  menu.src = "./img/icon-menu.svg";
  menu.classList.remove("show");
});
toggles.forEach((el) => {
  el.addEventListener("click", function (e) {
    contents.forEach((content) => {
      if (content !== el.nextElementSibling) {
        content.style.display = "none";
        content.parentElement
          .querySelector(".toggle")
          .querySelector("img").style.transform = "rotate(0)";
      }
    });
    if (
      el.nextElementSibling.style.display == "" ||
      el.nextElementSibling.style.display == "none"
    ) {
      el.querySelector("img").style.transform = "rotate(-180deg)";
      el.nextElementSibling.style.display = "flex";
    } else if (el.nextElementSibling.style.display == "flex") {
      el.nextElementSibling.style.display = "none";
      el.querySelector("img").style.transform = "rotate(0deg)";
    }
    e.stopPropagation();
  });
});
document.addEventListener("click", function () {
  contents.forEach((content) => {
    content.style.display = "none";
  });
  toggles.forEach((el) => {
    el.querySelector("img").style.transform = "rotate(0)";
  });
});
function query() {
  if (mediaQuery.matches) {
    nav.style.opacity = 0;
  } else {
    nav.style.opacity = 1;
  }
}
mobile.addEventListener("change", mobiles);
function mobiles() {
  if (mobile.matches) {
    hero.src = "./img/image-hero-mobile.png";
  } else {
    hero.src = "./img/image-hero-desktop.png";
  }
}
mobiles();
menu.addEventListener("click", function () {
  menu.classList.toggle("show");
  if (menu.classList.contains("show")) {
    menu.src = "./img/icon-close-menu.svg";
    nav.style.right = "0";
    landing.style.opacity = "1";
  } else {
    menu.src = "./img/icon-menu.svg";
    nav.style.right = "-250px";
    landing.style.opacity = "0";
  }
});
let element;
document.addEventListener("click", function (e) {
  element = e.target;
  let icon = e.target;
  while (element != nav) {
    if (element == nav) break;
    else if (element !== nav) {
      element = element.parentElement;
    }
    if (element == null) {
      break;
    }
  }
  if (element != nav && icon != menu) {
    nav.style.right = "-250px";
    landing.style.opacity = "0";
    menu.src = "./img/icon-menu.svg";
    menu.classList.remove("show");
  }
});
