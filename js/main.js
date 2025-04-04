document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".custom-navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) { 
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
        const isExpanded = toggleButton.getAttribute("aria-expanded") === "true";

        navBar.classList.toggle("active");

        toggleButton.setAttribute("aria-expanded", !isExpanded);
    });
});

