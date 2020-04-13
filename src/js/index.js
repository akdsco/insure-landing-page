console.log('JS loaded..');

const menuBtn = document.getElementById('menu-btn');
const menuItems = document.getElementById('menu-items');

menuBtn.onclick = () => {
    menuItems.classList.toggle('header--menu-items__show');
};