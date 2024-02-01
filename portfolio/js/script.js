const icon = document.querySelector('.icon-menu');
icon.addEventListener('click', function () {
    document.documentElement.classList.toggle('menu-open');
})

const menuLinks = document.querySelectorAll('.menu__link');

menuLinks.forEach(function(menuLink) {
    menuLink.addEventListener('click', function() {
        document.documentElement.classList.remove('menu-open');
    });
});
