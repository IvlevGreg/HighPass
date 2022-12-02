"use strict";var burger=document.querySelector(".burger"),menu=document.querySelector(".nav__list"),menuLinks=document.querySelectorAll(".nav__link"),burgerClose=document.querySelectorAll(".burger-close_menu"),container=document.querySelector(".header__nav_bottom");burger.addEventListener("click",(function(){menu.classList.toggle("d-flex"),container.classList.toggle("header__nav_bottom--active"),document.body.classList.toggle("stop-scroll")})),menuLinks.forEach((function(e){e.addEventListener("click",(function(){container.classList.remove("header__nav_bottom--active"),document.body.classList.remove("stop-scroll")}))})),burgerClose.forEach((function(e){e.addEventListener("click",(function(){container.classList.remove("header__nav_bottom--active"),menu.classList.remove("modal-nav--active"),document.body.classList.remove("stop-scroll")}))}));var validationContacts=new JustValidate("#contacts-form");validationContacts.addField("#contacts-name",[{rule:"minLength",value:3,errorMessage:"Введите больше 3 букв"},{rule:"maxLength",value:30,errorMessage:"Введите меньше 30 букв"},{rule:"required",errorMessage:"Укажите имя"}]).addField("#contacts-email",[{rule:"required",errorMessage:"Укажите email"},{rule:"email",errorMessage:"Email некорректен"}]);var validationAbout=new JustValidate("#about-form");validationAbout.addField("#about-email",[{rule:"required",errorMessage:"Укажите email"},{rule:"email",errorMessage:"Email некорректен"}]);var contacts=document.querySelector(".contacts__text-container"),contactsClose=document.querySelectorAll(".burger-close_contacts"),contactsOpen=document.querySelectorAll(".contacts__open-btn");function init(){document.querySelector("#map");var e,o=new ymaps.Map("map",{center:[55.769694,37.638929],zoom:14,controls:["geolocationControl","zoomControl"]},{suppressMapOpenBlock:!0,geolocationControlSize:"large",geolocationControlPosition:{top:"200px",right:"20px"},geolocationControlFloat:"none",zoomControlSize:"small",zoomControlFloat:"none",zoomControlPosition:{top:"120px",right:"20px"}});e=new ymaps.Placemark(o.getCenter(),{hintContent:"Собственный значок метки",balloonContent:"Франция, Иль-де-Франс, Париж, X округ Парижа, улица дю Фобур Сен Дени  54"},{iconLayout:"default#image",iconImageHref:"https://i.ibb.co/nm2KCRm/Ellipse-2.png",iconImageSize:[20,20],iconImageOffset:[0,0]}),o.geoObjects.add(e),o.behaviors.disable("scrollZoom")}contactsOpen.forEach((function(e){e.addEventListener("click",(function(){contacts.classList.toggle("contacts__text-container--active")}))})),contactsClose.forEach((function(e){e.addEventListener("click",(function(){contacts.classList.toggle("contacts__text-container--active")}))})),ymaps.ready(init);var searchBtn=document.querySelectorAll(".search__btn"),search=document.querySelector(".search__form-container"),searchClose=document.querySelectorAll(".burger-close_search");searchBtn.forEach((function(e){e.addEventListener("click",(function(){search.classList.toggle("search__form-container--active")}))})),searchClose.forEach((function(e){e.addEventListener("click",(function(){search.classList.toggle("search__form-container--active")}))}));var obj={},prop=null==obj?void 0:obj.prop;