const sneakersCartsStore = [
    { img: "1", name: "Luka 1", price: "240 $", description: "Баскетбольные кроссовки", rating: "4.9", class: "women" },
    { img: "2", name: "Luka 2 ‘Trick Shot’", price: "230 $", description: "Баскетбольные кроссовки", rating: "4.9", class: "men" },
    { img: "3", name: "Zion 2", price: "410 $", description: "Баскетбольные кроссовки", rating: "4.9", class: "men" },
    { img: "4", name: "LeBron XXI ‘Freshwater’", price: "210 $", description: "Баскетбольные кроссовки", rating: "4.9", class: "women" },
    { img: "5", name: "Pegasus Trail 4", price: "290 $", description: "Водонепроницаемые  женские кроссовки для бега", rating: "4.9", class: "women" },
    { img: "6", name: "Nike Air Max Plus", price: "240 $", description: "Мужские универсальные кросовки", rating: "4.9", class: "men" },
    { img: "7", name: "Alphafly 3 Proto", price: "210 $", description: "Женская обувь для шоссейных гонок", rating: "4.9", class: "women" },
    { img: "8", name: "Jumpman", price: "210 $", description: "Мужские беговые кросовки", rating: "4.9", class: "men" },
    { img: "9", name: "Mercurial Superfly", price: "210 $", description: "Футбольные бутсы для игры на твердом грунте", rating: "4.9", class: "boots" },
    { img: "10", name: "Phantom GX Pro", price: "180 $", description: "Футбольные бутсы для игры на твердом грунте", rating: "4.2", class: "boots" },
    { img: "11", name: "Phantom GX Academy", price: "79 $", description: "Низкие бутсы для мягкого грунта", rating: "4.9", class: "boots" },
    { img: "12", name: "Phantom GX Pro", price: "160 $", description: "Низкие бутсы для искусственного покрытия", rating: "4.0", class: "boots" },
]
const sneakersListDiv = document.querySelector(".sneakers-list");
for (let i = 0; i < sneakersCartsStore.length; i++) {
    const cartInfoStore = sneakersCartsStore[i];
    const sneakersCartDiv = document.createElement("div");
    sneakersCartDiv.className = "sneakers-cart " + cartInfoStore.class;
    sneakersCartDiv.innerHTML = `
<button class="sneakers-cart__like"><i class="fa-regular fa-heart"></i></button>
<div class="sneakers-cart__foto">
    <img src="./img/sneakers/${cartInfoStore.img}.png" alt="">
</div>
<div class="sneakers-cart__info">
    <div class="sneakers-cart__text">
        <div class="sneakers-cart__name"> 
            <h3>${cartInfoStore.name}</h3>  
            <span>${cartInfoStore.price}</span>
        </div>
        <div class="sneakers-cart__description"> 
            <p>${cartInfoStore.description}</p>
            <div class="sneakers-cart__rayting">
                <span>${cartInfoStore.rating}</span>
                <hr>
                <div>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
            </div>
        </div>
    </div>
    <button>Купить сейчас</button>
</div>
`
    sneakersListDiv.appendChild(sneakersCartDiv);
}



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
const sneackersList = document.querySelector(".sneakers-list");
for (let i = 0; i < 4; i++) {
    categoriesButtonAll[i].onclick = function () {
        for (let s = 0; s < 4; s++) {
            categoriesButtonAll[s].classList.remove("categories-button_active");
        }
        categoriesButtonAll[i].classList.add("categories-button_active");
        sneackersList.className ="sneakers-list";
        if (i == 0) {
            sneackersList.classList.add("all");
        }
        if (i == 1) {
            sneackersList.classList.add("boots-list");
        }
        if (i == 2) {
            sneackersList.classList.add("women");
        }
        if (i == 3) {
            sneackersList.classList.add("men");
        }
    }
}

const cartLikeAll = document.querySelectorAll(".sneakers-list .sneakers-cart__like");

for (let i = 0; i < cartLikeAll.length; i++) {
    cartLikeAll[i].onclick = function () {
        cartLikeAll[i].querySelector("i").classList.toggle("fa-solid");
    }
}


