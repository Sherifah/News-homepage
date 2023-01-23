const body = document.querySelector('body');
const overlay = document.querySelector('#overlay');
const menu = document.querySelector('.menu-icon');
const sideMenu = document.querySelector('.overlay-content');
const menuClose = document.querySelector('.menu-close-icon');

function openOverlay(e) {
    overlay.classList.add('overlay');
    body.style.position = 'fixed';
    sideMenu.hidden = false;
    sideMenu.style.width = '70%';
    menuClose.hidden = false;

    //overlay.style.left = 70%
}

function closeOverlay(e) {
    overlay.classList.remove('overlay');
    body.style.position = 'relative';
    sideMenu.hidden = true;
    menuClose.hidden = true;
}

menu.addEventListener('click', openOverlay);
menuClose.addEventListener('click', closeOverlay);