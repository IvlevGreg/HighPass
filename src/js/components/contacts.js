let contacts = document.querySelector('.contacts__text-container');
let contactsClose = document.querySelectorAll('.burger-close_contacts')
let contactsOpen = document.querySelectorAll('.contacts__open-btn');

contactsOpen.forEach(function (e) {
  e.addEventListener('click', function () {
   contacts.classList.toggle('contacts__text-container--active');

  })
  
})

contactsClose.forEach(function (el) {
  el.addEventListener('click', function () {
    contacts.classList.toggle('contacts__text-container--active');

  })
})

