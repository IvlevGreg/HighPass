let searchBtn = document.querySelectorAll('.search__btn');
let search = document.querySelector('.search__form-container');
let searchClose = document.querySelectorAll('.burger-close_search')

searchBtn.forEach(function (e) {
  e.addEventListener('click', function () {
   search.classList.toggle('search__form-container--active');
  })
})

searchClose.forEach(function (el) {
  el.addEventListener('click', function () {
    search.classList.toggle('search__form-container--active');
  })
})

