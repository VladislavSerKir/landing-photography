const headerElement = document.querySelector('.header');
const menuButton = headerElement.querySelector('.header__bar');
const headerLogo = headerElement.querySelector('.header__logo');
const headerMenu = headerElement.querySelector('.header__links');
const closeButton = headerElement.querySelector('.header__close-button')

menuButton.addEventListener('click', (event) => {
    console.log(headerElement, menuButton, headerLogo, headerMenu, closeButton)
    menuButton.style.display = 'none';
    headerLogo.style.display = 'none';
    closeButton.style.display = 'block';
    headerMenu.style.display = 'flex';
    headerMenu.style.padding = '0px';
})

closeButton.addEventListener('click', (event) => {
    console.log(headerElement, menuButton, headerLogo, headerMenu, closeButton)
    menuButton.style.display = 'block';
    headerLogo.style.display = 'block';
    closeButton.style.display = 'none';
    headerMenu.style.display = 'none';
    headerMenu.style.padding = '40px';
})
