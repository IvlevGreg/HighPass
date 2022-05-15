ymaps.ready(init);
function init() {
  // Создание карты.
  const mapElem = document.querySelector('#map');
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [55.769694, 37.638929],
    //center: [55.7578463, 37.626079],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 14,
    controls: ['geolocationControl', 'zoomControl']
  },

    {
      suppressMapOpenBlock: true,
      geolocationControlSize: "large",
      geolocationControlPosition: { top: "200px", right: "20px" },
      geolocationControlFloat: 'none',
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: { top: "120px", right: "20px" }
    }
  );

    let myPlacemark;
    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    hintContent: 'Собственный значок метки',
    balloonContent: 'Франция, Иль-де-Франс, Париж, X округ Парижа, улица дю Фобур Сен Дени  54'
  }, {

    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: 'https://i.ibb.co/nm2KCRm/Ellipse-2.png',
    // Размеры метки.
    iconImageSize: [20, 20],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [0, 0]
  });


  myMap.geoObjects
    .add(myPlacemark)
  myMap.behaviors.disable('scrollZoom')
}
