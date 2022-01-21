const nav_button = document.querySelector('.fas');
const navbar = document.querySelector('.navbar');

const openClose = function () {
    navbar.classList.toggle('display-navbar');
    nav_button.classList.toggle('fa-chevron-circle-up')
}