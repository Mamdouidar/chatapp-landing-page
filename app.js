let navMenu = document.querySelector('.nav-menu');
let btn = document.querySelector('.menu-toggle');

btn.addEventListener('click', function () {
    navMenu.classList.toggle('open');
});