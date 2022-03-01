const hamburger = document.querySelector('.bars');
const navLinks = document.querySelector('.nav-items');
const links = document.querySelectorAll('.nav-items li');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('toggle');
});

links.forEach((l) => {
  l.addEventListener('click', () => {
    hamburger.classList.remove('toggle');
    navLinks.classList.remove('open');
  });
});
