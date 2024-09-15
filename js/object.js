const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const closeMenu = document.getElementById('closeMenu');

hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
});

closeMenu.addEventListener('click', function() {
    navLinks.classList.remove('active');
});

window.addEventListener('load', function() {
    const mainContent = document.querySelector('.main-content');
    const mainContentPosition = mainContent.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (mainContentPosition < screenPosition) {
        mainContent.classList.add('show');
    }
});