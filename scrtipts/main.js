// Nav burger
const navBurger = document.querySelector('.header__burger');
const navIcon = document.querySelector('.nav-icon');
const headerTopBlock = document.querySelector('.header__top');

navBurger.onclick = function () {
    navIcon.classList.toggle('nav-icon--active');
    headerTopBlock.classList.toggle('header__top--mobile');
}

// phoneMask
mask('[data-tel-input]');

const phoneMask = document.querySelectorAll('[data-tel-input]');

phoneMask.forEach(element => {
    element.addEventListener('input', () => {
        if (element.value == "+") element.value = "";
    })
    element.addEventListener('blur', () => {
        if (element.value === "+") element.value = "";
    })
});