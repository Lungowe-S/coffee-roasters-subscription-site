const mobileMenu = document.querySelector(".hamburger__menu")
const navMenu = document.querySelector(".cluster")
const navIcon = document.querySelector(".hamburger__icon")

mobileMenu.addEventListener("click", event => {
    navIcon.classList.toggle("open")
    if (navIcon.classList.contains("open")) {
        navIcon.src = "/starter-code/assets/shared/mobile/icon-close.svg" 
    } else {
        navIcon.src = "/starter-code/assets/shared/mobile/icon-hamburger.svg"
    }

    navMenu.classList.toggle("nav__open")
})