// Esempio: cambia colore navbar quando scrolli
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const btn = document.querySelector(".btn-black");
  const hero = document.querySelector(".hero");
  const heroBottom = hero.offsetTop + hero.offsetHeight;

  if (window.scrollY > heroBottom - 80) {
    navbar.classList.add("scrolled");
    btn.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
    btn.classList.remove("scrolled");
  }
});

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const hero = document.querySelector(".hero");
  const heroHeight = hero.offsetHeight;

  if (window.scrollY >= heroHeight) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const letters = document.querySelectorAll(".m-letter");
  let current = 0;
  setInterval(() => {
    letters.forEach((el, idx) =>
      el.classList.toggle("active", idx === current)
    );
    current = (current + 1) % letters.length;
  }, 400);
});

document.querySelectorAll(".m-letter")[0].classList.add("active");
