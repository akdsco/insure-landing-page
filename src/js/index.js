console.log('JS loaded..');

const menuBtn = document.getElementById('menu-btn');
const menuItems = document.getElementById('menu-items');
const mobileMenuIcons = document.getElementsByClassName('header--mobile-menu-icon');
const specialMenuBtn = document.getElementById('special-menu-btn');
const heroContainer = document.getElementById('hero-container');

menuBtn.onclick = () => {
    menuItems.classList.toggle('header--menu-items__show');
    for(let icon of mobileMenuIcons) {
      icon.classList.toggle('header--mobile-menu-icon__active');
    }
};

window.onload = () => {
  if(window.innerWidth >= 650) {
    // render appropriate button for mobile or desktop menu when loading page
    if(specialMenuBtn.classList.contains('btn-menu')) {
      specialMenuBtn.classList.remove('btn-menu');
      specialMenuBtn.classList.add('btn-primary');
    }
  }

  if(window.innerWidth <= 850) {
    // render hero section without container class
    if(heroContainer.classList.contains('container')) {
      heroContainer.classList.remove('container');
    }
  }
};

window.onresize = () => {
  // automatically close open mobile menu if user switches window size to tablet or higher
  if(window.innerWidth >= 650) {
    if(menuItems.classList.contains('header--menu-items__show')) {
      menuItems.classList.toggle('header--menu-items__show');
      // on btn click swap active mobile menu icon
      for(let icon of mobileMenuIcons) {
        icon.classList.toggle('header--mobile-menu-icon__active');
      }
    }
    // render appropriate button for mobile or desktop menu
    if(specialMenuBtn.classList.contains('btn-menu')) {
      specialMenuBtn.classList.remove('btn-menu');
      specialMenuBtn.classList.add('btn-primary');
    }
  } else {
    // render appropriate button for mobile or desktop menu
    if(specialMenuBtn.classList.contains('btn-primary')) {
      specialMenuBtn.classList.remove('btn-primary');
      specialMenuBtn.classList.add('btn-menu');
    }
  }

  if(window.innerWidth >= 850) {
    // render hero section with container class on desktop
    if(!heroContainer.classList.contains('container')) {
      heroContainer.classList.add('container');
    }
  } else {
    // render hero section without container class on tablet and smaller devices
    if(heroContainer.classList.contains('container')) {
      heroContainer.classList.remove('container');
    }
  }
};