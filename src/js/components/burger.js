let burger = document.querySelector('.burger');
let menu = document.querySelector('.nav__list');
let menuLinks = document.querySelectorAll('.nav__link');
let burgerClose = document.querySelectorAll('.burger-close_menu');
let container = document.querySelector('.header__nav_bottom');

burger.addEventListener('click', function () {
    menu.classList.toggle('d-flex');
    container.classList.toggle('header__nav_bottom--active');
    document.body.classList.toggle('stop-scroll');
  })

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    container.classList.remove('header__nav_bottom--active');
    document.body.classList.remove('stop-scroll')
  })
})

burgerClose.forEach(function (e) {
  e.addEventListener('click', function () {
    container.classList.remove('header__nav_bottom--active');
    menu.classList.remove('modal-nav--active');
    document.body.classList.remove('stop-scroll')
  })
})