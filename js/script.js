const navBtn = document.querySelector(".grid"),
  closeBtn = document.querySelector(".bx-x"),
  nav = document.querySelector("header nav");
navBtn.onclick = () => {
  nav.classList.add("activ");
};
closeBtn.onclick = () => {
  nav.classList.remove("activ");
};
const header = document.querySelector("header");
window.onscroll = (ev) => {
  this.scrollY > 50
    ? header.classList.add("activ")
    : header.classList.remove("activ");
};
/*========= Add activ class to links on scroll========*/
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", () => {
  let scrollY = window.pageYOffset;
  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight,
      sectionTop = section.offsetTop - 60,
      sectionId = section.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".flex ul a[href*=" + sectionId + "]")
        .classList.add("activ");
    } else {
      document
        .querySelector(".flex ul a[href*=" + sectionId + "]")
        .classList.remove("activ");
    }
  });
});

const links = document.querySelectorAll("nav ul li a");
links.forEach((a) => {
  a.onclick = () => {
    nav.classList.remove("activ");
  };
});

let swiper = new Swiper(".swiper", {
  slidesPreview: "auto",
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  breakpoints: {
    992: {
      spaceBetween: 80,
    },
  },
});

const dark = document.getElementById("dark");
dark.onclick = () => {
  if (dark.classList.contains("bx-moon")) {
    dark.removeAttribute("class");
    dark.setAttribute("class", "bx bx-sun");
    document.body.classList.add("darkMood");
  } else {
    dark.removeAttribute("class");
    dark.setAttribute("class", "bx bx-moon");
    document.body.classList.remove("darkMood");
  }
};
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  rest: true,
});
sr.reveal(`.home img ,.celebrate img `);
sr.reveal(`.home .text,.celebrate .text`, { delay: 600, origin: "bottom" });
sr.reveal(`.column`, { interval: 100 });
sr.reveal(`footer .footer-img:first-child`, {origin:'right'})
sr.reveal(`footer .footer-img:last-child `, {origin:'left'})