const nav_button = document.querySelector('.fas');
const navbar = document.querySelector('.navbar');

const icon_up = function () {
    //if()
}
nav_button.addEventListener('click', () => {
    navbar.classList.toggle('display-navbar');
    nav_button.classList.toggle('fa-chevron-circle-up');
});