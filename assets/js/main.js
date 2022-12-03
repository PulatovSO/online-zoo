let body = document.querySelector('.body');
let menuBtn = document.querySelector('.header__menu-btn');
let menuCloseBtn = document.querySelector('.menu__close-btn');
let dropdownMenu = document.querySelector('.menu');
let bgLayer = document.querySelector('.bg-layer');

menuBtn.addEventListener('click', () => {
    dropdownMenu.style.top = '0';
    bgLayer.style.top = '0';
    body.classList.add('bg-layer-active');
})

menuCloseBtn.addEventListener('click', closeMenu);
bgLayer.addEventListener('click', closeMenu);

function closeMenu () {
    dropdownMenu.style.top = '-330px';
    bgLayer.style.top = '-100%';
    body.classList.remove('bg-layer-active');
}
