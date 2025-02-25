document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".custom-navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) { // Si baja más de 50px
            navbar.classList.add("navbar-scrolled");
        } else {
            navbar.classList.remove("navbar-scrolled");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".menu-toggle");
    const navBar = document.querySelector(".nav-bar");

    toggleButton.addEventListener("click", function () {
        if (navBar.classList.contains("active")) {
            navBar.classList.remove("active");
        } else {
            navBar.classList.add("active");
        }
    });
});
