const headerElement = document.querySelector('.header');
const menuButton = headerElement.querySelector('.header__bar');
const headerLogo = headerElement.querySelector('.header__logo');
const headerLinks = headerElement.querySelectorAll('.header__link');
const headerMenu = headerElement.querySelector('.header__links');
const closeButton = headerElement.querySelector('.header__close-button');
const wrapper = headerElement.querySelector('.wrapper');
const headerContainer = headerElement.querySelector('.header__container');

function toggleMenu() {
    closeButton.classList.toggle("header__close-button_visible");
    headerContainer.toggleAttribute("hidden");
    wrapper.toggleAttribute("hidden");
}

// разворачивание бургерного меню на мобильном разрешении
menuButton.addEventListener("click", () => {
    toggleMenu();
});

closeButton.addEventListener("click", () => {
    toggleMenu();
});

headerLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (!wrapper.hidden) {
            toggleMenu()
        }
    });
})

window.addEventListener('resize', function (event) {
    if (event.target.innerWidth > 768 && Array.from(closeButton.classList).includes('header__close-button_visible')) {
        toggleMenu();
    }
}, true);

