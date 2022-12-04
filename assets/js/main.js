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
let sliderItems = document.querySelectorAll('.slider__item');
let slide1 = document.querySelector('.slide-1');
let slide2 = document.querySelector('.slide-2');
let slide3 = document.querySelector('.slide-3');
let slide1Item = document.querySelectorAll('.slide-1-item');
let slide2Item = document.querySelectorAll('.slide-2-item');
let slide3Item = document.querySelectorAll('.slide-3-item');

let value = 0;

sliderBtns.forEach(button => {
    button.addEventListener('click', () => {
        button.setAttribute('disabled', 'true')

        setTimeout(() => {
            button.removeAttribute('disabled')
        }, 500);

        if(button.id == 'next') {
            value++;
        }

        if (button.id == 'prev') {
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
            changePosition(slide1, slide2, slide3)
            ChangeOpacity(slide1, slide3, slide2);
            mix(slide2Item, slide1Item)

        } else if (value == 2) {
            slide1.style.transform = 'translateX(100%)';
            slide2.style.transform = 'translateX(100%)';
            slide3.style.transform = 'translateX(-200%)';

            ChangeOpacity(slide3, slide1, slide2);
            mix(slide2Item, slide3Item)


        } else if (value == 3) {
            slide1.style.transform = 'translateX(0)';
            slide2.style.transform = 'translateX(0)';
            slide3.style.transform = 'translateX(0)';

            ChangeOpacity(slide3, slide2, slide1);
            mix(slide3Item, slide1Item)

        } else if (value == 4) {
            changePosition(slide1, slide2, slide3)
            ChangeOpacity(slide1, slide3, slide2);
            mix(slide2Item, slide1Item);

            if(button.id == 'next' && value == 4) {
                value = 1
            }
        }
    })
})

function mix(mix1, mix2) {
    setTimeout(() => {
        mix1.forEach(item => {
            item.style.order = Math.floor(Math.random() * 18)
        })
        mix2.forEach(item => {
            item.style.order = Math.floor(Math.random() * 18)
        })
    }, 300);
}

function changePosition(slide1, slide2, slide3) {
    slide1.style.transform = 'translateX(200%)';
    slide2.style.transform = 'translateX(-100%)';
    slide3.style.transform = 'translateX(-100%)';
}

function ChangeOpacity(dim1, bright, dim2) {
    dim1.style.opacity = '0';
    bright.style.opacity = '1';
    dim2.style.opacity = '0';
}