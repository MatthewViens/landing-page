console.log('test');
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

/**
 * Define Global Variables
 * 
*/
const navList = document.querySelector('#navbar__list');
const pageSections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
const scroll = (e) => {
  e.preventDefault();
  
  const section = document.querySelector(e.target.getAttribute('href'));
  console.log(section);
  window.scrollTo({
    top: section.offsetTop,
    behavior: 'smooth'
  });
}
// build the nav
for(let i = 0; i < pageSections.length; i++) {
  const navItem = document.createElement('li');
  const navLink = document.createElement('a');
  navLink.textContent = pageSections[i].dataset.nav;
  navLink.classList.add('menu__link');
  navLink.setAttribute('href', `#${pageSections[i].getAttribute('id')}`);
  navItem.appendChild(navLink);
  navItem.addEventListener('click', scroll);
  navList.appendChild(navItem);
}


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
// const scroll = (e) => {
//   window.scrollTo(e.target)
// }
// Set sections as active


