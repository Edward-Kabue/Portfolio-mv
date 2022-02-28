const hamburger = document.querySelector(".bars");
const navLinks = document.querySelector(".nav-items");
const lines = document.querySelectorAll(".bars span");
const links = document.querySelectorAll(".link");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  hamburger.classList.toggle("toggle");
  lines.forEach((line) => {
    line.classList.toggle("color");
  });
});
links.forEach((l) => {
  l.addEventListener("click", () => {
    navLinks.classList.replace("open", "bars");
  });
});
