const headerElement = document.querySelector('.header');
const menuButton = headerElement.querySelector('.header__bar');
const headerLogo = headerElement.querySelector('.header__logo');
const headerMenu = headerElement.querySelector('.header__links');
const closeButton = headerElement.querySelector('.header__close-button');
const wrapper = headerElement.querySelector('.wrapper');
const headerContainer = headerElement.querySelector('.header__container');

// разворачивание бургерного меню на мобильном разрешении
menuButton.addEventListener("click", () => {
    closeButton.classList.toggle("header__close-button_visible");
    headerContainer.toggleAttribute("hidden");
    wrapper.toggleAttribute("hidden");
});

closeButton.addEventListener("click", () => {
    closeButton.classList.toggle("header__close-button_visible");
    headerContainer.toggleAttribute("hidden");
    wrapper.toggleAttribute("hidden");
});

window.addEventListener('resize', function (event) {
    if (event.target.innerWidth > 768 && Array.from(closeButton.classList).includes('header__close-button_visible')) {
        closeButton.classList.toggle("header__close-button_visible");
        headerContainer.toggleAttribute("hidden");
        wrapper.toggleAttribute("hidden");
    }
}, true);