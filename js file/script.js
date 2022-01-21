const nav_button = document.querySelector('.fas');
const navbar = document.querySelector('.navbar');

nav_button.addEventListener('click', () => {
    navbar.classList.toggle('display-navbar');
});