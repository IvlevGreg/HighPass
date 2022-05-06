let openBurgerMenu = document.querySelector(".burger");
let closeBurgerMenu = document.querySelector(".close");
let menu = document.querySelector(".menu");


const tlBurger = gsap.timeline({ paused: true });
tlBurger.to(".menu", 0.5, {

  display:'block',
  ease: "Sine.easeIn",

})

.from(".menu", 0.5, {
    opacity: 0,
  ease: "Sine.easeIn",
},
'=-0.5')


.from(".menu__top", 0.5, {
  y: -100,
  opacity: 0,
  ease: "back",
},
'=-0.5')

.from(".menu__nav", 0.5, {
  y: 100,
  opacity: 0,
  ease: "Sine.easeIn",
})
.from(".social", 0.5, {
  y: 100,
  opacity: 0,
  ease: "Sine.easeIn",
})
.from(".menu__right", 0.5, {
  y: 100,
  opacity: 0,
  ease: "Sine.easeIn",
},
'=-0.5');



openBurgerMenu.onclick = function () {
  tlBurger.play();
};

closeBurgerMenu.onclick = function () {
  tlBurger.reverse();
};

