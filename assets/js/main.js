let body = document.querySelector('.body');
let menuBtn = document.querySelector('.header__menu-btn');
let menuCloseBtn = document.querySelector('.menu__close-btn');
let dropdownMenu = document.querySelector('.menu');
let bgLayer = document.querySelector('.bg-layer');

// DROPDOWN MENU
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

// PETS CAROUSEL
let sliderLists = document.querySelector('.slider__lists');
let sliderBtns = document.querySelectorAll('.slider__btn');
let sliderList = document.querySelector('.slider__list-wrap');
let slide1 = document.querySelector('.slide-1');
let slide2 = document.querySelector('.slide-2');
let slide3 = document.querySelector('.slide-3');
let value = 0;

sliderBtns.forEach(button => {
    button.addEventListener('click', () => {
        button.setAttribute('disabled', 'true')

        setTimeout(() => {
            button.removeAttribute('disabled')
        }, 500);

        if(button.id == 'prev') {
            value++;
        }

        if (button.id == 'next') {
            if (value == 4) {
                value = 3
            } else if (value == 3) {
                value = 2
            } else if (value == 2) {
                value = 1
            } else if (value == 1) {
                value = 3
            } else if (value == 0) {
                value = 2
            }
        }

        if (value == 1) {
            slide1.style.transform = 'translateX(200%)';
            slide2.style.transform = 'translateX(-100%)';
            slide3.style.transform = 'translateX(-100%)';

            slide1.style.opacity = '0.1';
            slide3.style.opacity = '1';
            slide2.style.opacity = '0.1';
        } else if (value == 2) {
            slide1.style.transform = 'translateX(100%)';
            slide2.style.transform = 'translateX(100%)';
            slide3.style.transform = 'translateX(-200%)';

            slide3.style.opacity = '0.1';
            slide1.style.opacity = '1';
            slide2.style.opacity = '0.1';
        } else if (value == 3) {
            slide1.style.transform = 'translateX(0)';
            slide2.style.transform = 'translateX(0)';
            slide3.style.transform = 'translateX(0)';

            slide3.style.opacity = '0.1';
            slide2.style.opacity = '1';
            slide1.style.opacity = '0.1';
        } else if (value == 4) {
            slide1.style.transform = 'translateX(200%)';
            slide2.style.transform = 'translateX(-100%)';
            slide3.style.transform = 'translateX(-100%)';

            slide1.style.opacity = '0.1';
            slide3.style.opacity = '1';
            slide2.style.opacity = '0.1';

            if(button.id == 'prev' && value == 4) {
                value = 1
            }
        }
    })
})