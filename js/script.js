const sneakersListDiv = document.querySelector(".sneakers-list");


const navLinks = document.querySelector(".nav__links");
const navLogo = document.querySelector(".nav__logo");
const navButtons = document.querySelector(".nav__buttons");
const hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
    hamburger.classList.toggle("hamburger_active");
    navLinks.classList.toggle("nav__links_active");
    navLogo.classList.toggle("nav__logo_active");
    navButtons.classList.toggle("nav__buttons_active");
}

const navLinksAll = document.querySelectorAll(".nav__links a");

for (let i = 0; i < 4; i++) {
    navLinksAll[i].onclick = function () {
        hamburger.classList.remove("hamburger_active");
        navLinks.classList.remove("nav__links_active");
        navLogo.classList.remove("nav__logo_active");
        navButtons.classList.remove("nav__buttons_active");
    }
}

const navButtonsAll = document.querySelectorAll(".nav__buttons button");

for (let i = 0; i < 3; i++) {
    navButtonsAll[i].onclick = function () {
        hamburger.classList.remove("hamburger_active");
        navLinks.classList.remove("nav__links_active");
        navLogo.classList.remove("nav__logo_active");
        navButtons.classList.remove("nav__buttons_active");
    }
}

navLogo.onclick = function () {
    hamburger.classList.remove("hamburger_active");
    navLinks.classList.remove("nav__links_active");
    navLogo.classList.remove("nav__logo_active");
    navButtons.classList.remove("nav__buttons_active");
}


const categoriesButtonAll = document.querySelectorAll(".categories__button button");

for (let i = 0; i < 4; i++) {
    categoriesButtonAll[i].onclick = function () {
        for (let s = 0; s < 4; s++) {
            categoriesButtonAll[s].classList.remove("categories-button_active");
        }
        categoriesButtonAll[i].classList.add("categories-button_active");
    }
}

const cartLikeAll = document.querySelectorAll(".sneakers-list .sneakers-cart__like");

for (let i = 0; i < cartLikeAll.length;i++){
    cartLikeAll[i].onclick = function () {
        cartLikeAll[i].querySelector("i").classList.toggle("fa-solid");
    }
}
