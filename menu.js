const ham = document.querySelector(".hamburger");
const menu = document.querySelector(".menu-navegation");

ham.addEventListener("click", () => {
  menu.classList.toggle("spread");
});

window.addEventListener("click", (e) => {
  if (
    menu.classList.contains("spread") &&
    e.target != menu &&
    e.target != ham
  ) {
    menu.classList.toggle("spread");
  }
});
