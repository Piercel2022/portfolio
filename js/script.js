
'use strict';



/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}





/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

const openMenu = document.querySelector('.hamburger');
const bodyBlur = document.querySelector('.main-section');
const navItem = document.querySelectorAll('.item');
const menuCont = document.querySelector('.items');
const closeMenu = document.querySelector('.close');
function openMobMenu() {
  menuCont.classList.add('menu-open');
  bodyBlur.classList.add('blurred');
}
openMenu.addEventListener('click', openMobMenu);
function closeMobMenu() {
  menuCont.classList.remove('menu-open');
}
closeMenu.addEventListener('click', closeMobMenu);

navItem.forEach((menuItem) => {
  menuItem.addEventListener('click', closeMobMenu);
});

const acc = document.getElementsByClassName('accordion');
let i;

for (i = 0; i < acc.length; i += 1) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle('active');
    const panel = this.nextElementSibling;
    if (panel.style.display === 'flex') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'flex';
    }
  });
}


const portfolios = document.querySelector('#Portfolio');
projects.forEach((project, id) => {
  const innerProject = document.createElement('div');
  innerProject.classList.add('container');
  innerProject.innerHTML = (`
    <img class="projetc-image" ${project.mobileImage}>
    <img class="Dprojetc-image" ${project.desktopImage}>
    <div class="details project${id}">
      <h2 class="Project-Title">${project.name}</h2>
      <article class="experience">
          <span class="title">${project.jobDescription.company}</span>
          <span class="year"> &nbsp;&nbsp; &#8226; &nbsp;&nbsp; ${project.jobDescription.role} &nbsp;&nbsp; &#8226; &nbsp;&nbsp;${project.jobDescription.year}</span>
      </article>
      <p class="description">${project.description}</p>
      <ul class="stacks">
      <li class="language">${project.languages[0]}</li>
        <li class="language">${project.languages[1]}</li>
        <li class="language">${project.languages[2]}</li>
      </ul>
      <button class='btn see-project' type="button">see project</button>
    </div>
    `);
  portfolios.appendChild(innerProject);
});
