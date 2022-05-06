const tlLoad = new TimelineMax();

tlLoad
.from(".hero__title", 0.7,  {
     y: 100,
    opacity: 0,
  ease: "Sine.easeIn",
})

.from(".hero__btn", 0.5,  {
  y: 50,
 opacity: 0,
ease: "Sine.easeIn",

},
'-=0.7'
)

.from(".hero__descr", 0.7, {

    opacity: 0,
  ease: "Sine.easeIn",
})

.from(".photos__img-1", 0.7, {

  opacity: 0,
ease: "Sine.easeIn",
},
'-=0.7'
)

.from(".photos__img-2", 0.7, {

  opacity: 0,
ease: "Sine.easeIn",
})

.from(".photos__img-3", 0.7, {

  opacity: 0,
ease: "Sine.easeIn",
})

.from(".photos__author", 0.7, {

  opacity: 0,
ease: "Sine.easeIn",
},
'-=0.7'
)
