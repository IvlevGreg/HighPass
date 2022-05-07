const swiper = new Swiper('.swiper', {
  // Optional parameters
  autoplay: {
    delay: 5000,
  },
  effect: 'cube',
  cubeEffect: {
    slideShadows: false,
    shadowOffset: 0,
  },
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  a11y: {
    paginationBulletMessage: 'Перейти на слайд {{index}}',
  },
});

