let hamburger = document.querySelector(".header .links .icons");
let menu_item = document.querySelector(".header .links ul");

hamburger.addEventListener("click", () => {
  menu_item.classList.toggle("active");
});
