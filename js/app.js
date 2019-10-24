/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/******************
Global Variables
******************/

const navList = document.querySelector("#navbar__list");
const pageSections = document.querySelectorAll("section");
const scrollTopButton = document.getElementById("scroll-to-top");

/******************
Helper Functions
******************/

const resetSections = () => {
  for (i = 0; i < pageSections.length; i++) {
    pageSections[i].classList.remove("active-section");
  }
};

const resetNav = () => {
  const navLinks = navList.querySelectorAll("a");
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.remove("active");
  }
};

const checkActive = () => {
  for (let i = 0; i < pageSections.length; i++) {
    const sectionDimensions = pageSections[i].getBoundingClientRect();
    if (sectionDimensions.top >= -50 && sectionDimensions.top <= 50) {
      return pageSections[i];
    }
  }
};

const updateScrollTop = () => {
  if (window.scrollY > window.innerHeight) {
    scrollTopButton.classList.remove("fade-out");
    scrollTopButton.classList.add("fade-in");
  } else {
    scrollTopButton.classList.remove("fade-in");
    scrollTopButton.classList.add("fade-out");
  }
};

/******************
Event Functions
******************/

const scroll = e => {
  console.log(e.target.tagName);
  e.preventDefault();
  if (e.target.tagName === "DIV") {
    console.log("clicked");
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  } else {
    const section = document.querySelector(e.target.getAttribute("href"));
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth"
    });
  }
};

const updateActive = () => {
  const active = checkActive();
  if (active) {
    resetSections();
    resetNav();
    const sectionID = active.getAttribute("id");
    const sectionLink = navList.querySelector(`a[href='#${sectionID}']`);
    sectionLink.classList.add("active");
    active.classList.add("active-section");
  }
  updateScrollTop();
};

/******************
Dynamic Navigation
******************/

const createNav = () => {
  const navFragment = document.createDocumentFragment();
  for (let i = 0; i < pageSections.length; i++) {
    const navItem = document.createElement("li");
    const navLink = document.createElement("a");
    navLink.textContent = pageSections[i].dataset.nav;
    navLink.classList.add("menu__link");
    navLink.setAttribute("href", `#${pageSections[i].getAttribute("id")}`);
    navItem.appendChild(navLink);
    navItem.addEventListener("click", scroll);
    navFragment.appendChild(navItem);
  }
  navList.appendChild(navFragment);
};

createNav();
window.addEventListener("scroll", updateActive);
scrollTopButton.addEventListener("click", scroll);
