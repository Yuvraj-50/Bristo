const navIcon = document.querySelector(".nav__icon");
const navClose = document.querySelector(".nav__close");
const navList = document.querySelector(".nav__list");
const navbgoverlay = document.querySelector(".nav__bgoverlay");

const openMenu = () => {
  navList.classList.add("show");
  navbgoverlay.classList.add("active");
  document.body.style =
    "visibility : visible; height : 100vh; width : 100vw; overflow : hidden;";
};

const closeMenu = () => {
  navList.classList.remove("show");
  navbgoverlay.classList.remove("active");
  document.body.style =
    "visibility : visible; hight : initial; width: 100%; overflow-x : hidden";
};

navIcon.addEventListener("click", openMenu);
navClose.addEventListener("click", closeMenu);
navbgoverlay.addEventListener("click", closeMenu);

// aos animations
AOS.init({
  offset: 200,
  delay: 100,
  duration: 400,
  easing: "ease",
  once: false,
  mirror: false,
  anchorPlacement: "top - bottom",
});

// end of aos animations
