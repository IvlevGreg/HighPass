let sel = document.querySelector('.nav-list__form');
let sel2 = document.querySelector('.search-btn');
let sel3 = document.querySelector('.closed-btn');
let sel4 = document.querySelectorAll('.nav-list__item-link');
let sel5 = document.querySelector('.logo-link__img-header');
let sel6 = document.querySelector('.menu__img-btn');
let sel7 = document.querySelector('.menu__img-btn-closed');
let sel8 = document.querySelector('.nav-list-menu');
let sel9 = document.querySelector('.menu__img-btn--active');


document.querySelectorAll('.search-btn').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (event) {
    event.preventDefault();
    sel4.forEach((el) => {
      // el.classList.toggle("nav-list__item-link--search");
    });
    sel.classList.toggle('nav-list__form--active');
    sel2.classList.toggle('search-btn--active-foc');
    sel3.classList.toggle('closed-btn--active');
    sel5.classList.toggle('logo-link__img-header--search');
  });
});

document.querySelectorAll('.menu__img-btn').forEach(function (tabsBtn2) {
  tabsBtn2.addEventListener('click', function (event2) {
    event2.preventDefault();
    sel6.classList.toggle('menu__img-btn--pas');
    sel7.classList.toggle('menu__img-btn-closed')
    sel8.classList.toggle('nav-list-menu--active');
    sel6.classList.remove('menu__img-btn--active');
  });
});


