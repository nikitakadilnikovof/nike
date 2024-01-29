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
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none" class="like">
    <path
        d="M0.5 6.76466V6.96606C0.5 8.78643 1.21424 10.53 2.48915 11.7571C2.48917 11.7571 2.48919 11.7571 2.48922 11.7571L9.55383 18.559C9.94943 18.9625 10.4854 19.107 11 19.107C11.4826 19.107 12.0152 18.9587 12.4071 18.559L19.4717 11.7571C19.4717 11.7571 19.4718 11.7571 19.4718 11.7571C20.741 10.5355 21.5 8.79447 21.5 6.96606V6.76466C21.5 3.71422 19.3448 1.07926 16.3981 0.592522C14.4709 0.240837 12.4703 0.905049 11.0708 2.34827L10.9847 2.43698L10.8825 2.34031C9.48323 0.902607 7.48646 0.241484 5.5628 0.592522C2.6113 1.08006 0.5 3.71936 0.5 6.76466Z"
        stroke="#FEFFF7" />
    </svg> 
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






const newModelStore = [
    { img: "1", name: "Jumpman", description: "Мужские беговые кроссовки", rating: "4.9", color:"#B7A997"},
    { img: "2", name: "AIR-MAX", description: "Женские городские кросовки", rating: "4.9", color:"#D6B895"},
    { img: "3", name: "CityMax", description: "Мужские городские кросовки", rating: "3.6", color:"#7DB3B9"},
    { img: "4", name: "K-Swiss", description: "Мужские городские кросовки", rating: "4.4", color:"#DD7916"},
]
const newModelListDiv = document.querySelector(".new-model__sneakers-list");
for (let i = 0; i < newModelStore.length; i++) {
    const cartInfoStor = newModelStore[i];
    const newModelCartDiv = document.createElement("div");
    newModelCartDiv.className = "new-model__cart newModel-cart";
    newModelCartDiv.innerHTML = `
    <div class="newModel-cart__bg" style="background-color: ${cartInfoStor.color};">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none" class="like">
            <path
                d="M0.5 6.76466V6.96606C0.5 8.78643 1.21424 10.53 2.48915 11.7571C2.48917 11.7571 2.48919 11.7571 2.48922 11.7571L9.55383 18.559C9.94943 18.9625 10.4854 19.107 11 19.107C11.4826 19.107 12.0152 18.9587 12.4071 18.559L19.4717 11.7571C19.4717 11.7571 19.4718 11.7571 19.4718 11.7571C20.741 10.5355 21.5 8.79447 21.5 6.96606V6.76466C21.5 3.71422 19.3448 1.07926 16.3981 0.592522C14.4709 0.240837 12.4703 0.905049 11.0708 2.34827L10.9847 2.43698L10.8825 2.34031C9.48323 0.902607 7.48646 0.241484 5.5628 0.592522C2.6113 1.08006 0.5 3.71936 0.5 6.76466Z"
                stroke="#FEFFF7" />
        </svg>
        <img src="./img/new-model/${cartInfoStor.img}.png" alt="">
        <button style="color: ${cartInfoStor.color};">В корзину</button>
        <div class="newModel-cart__info">
            <h3>${cartInfoStor.name}</h3>
            <p>${cartInfoStor.description}</p>
            <div>
                <span>${cartInfoStor.rating}</span>
                <hr>
                <i class="fa-solid fa-star"></i>
            </div>
        </div>
    </div>
    `
    newModelListDiv.appendChild(newModelCartDiv);
}





const navLinks = document.querySelector(".nav__links");
const navLogo = document.querySelector(".nav__logo");
const navButtons = document.querySelector(".nav__buttons");
const hamburger = document.querySelector(".hamburger");
const body = document.querySelector("body")
hamburger.onclick = function () {
    hamburger.classList.toggle("hamburger_active");
    navLinks.classList.toggle("nav__links_active");
    navLogo.classList.toggle("nav__logo_active");
    navButtons.classList.toggle("nav__buttons_active");
    body.classList.toggle("no-scroll");
}

const navLinksAll = document.querySelectorAll(".nav__links a");

for (let i = 0; i < 4; i++) {
    navLinksAll[i].onclick = function () {
        hamburger.classList.remove("hamburger_active");
        navLinks.classList.remove("nav__links_active");
        navLogo.classList.remove("nav__logo_active");
        navButtons.classList.remove("nav__buttons_active");
        body.classList.remove("no-scroll");
    }
}

const navButtonsAll = document.querySelectorAll(".nav__buttons button");

for (let i = 0; i < 3; i++) {
    navButtonsAll[i].onclick = function () {
        hamburger.classList.remove("hamburger_active");
        navLinks.classList.remove("nav__links_active");
        navLogo.classList.remove("nav__logo_active");
        navButtons.classList.remove("nav__buttons_active");
        body.classList.remove("no-scroll");
    }
}

navLogo.onclick = function () {
    hamburger.classList.remove("hamburger_active");
    navLinks.classList.remove("nav__links_active");
    navLogo.classList.remove("nav__logo_active");
    navButtons.classList.remove("nav__buttons_active");
    body.classList.remove("no-scroll");
}


const categoriesButtonAll = document.querySelectorAll(".categories__button button");
const sneackersList = document.querySelector(".sneakers-list");
for (let i = 0; i < 4; i++) {
    categoriesButtonAll[i].onclick = function () {
        for (let s = 0; s < 4; s++) {
            categoriesButtonAll[s].classList.remove("categories-button_active");
        }
        categoriesButtonAll[i].classList.add("categories-button_active");
        sneackersList.className = "sneakers-list";
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

const cartLikeAll = document.querySelectorAll("section svg.like");

for (let i = 0; i < cartLikeAll.length; i++) {
    cartLikeAll[i].onclick = function () {
        cartLikeAll[i].classList.toggle("like_active");
    }
}
