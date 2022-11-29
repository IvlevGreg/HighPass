const validationContacts = new JustValidate('#contacts-form');

validationContacts
  .addField('#contacts-name', [
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Введите больше 3 букв'
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Введите меньше 30 букв'

    },
    {
      rule: 'required',
      errorMessage: 'Укажите имя',
    },
    
  ])
  .addField('#contacts-email', [
    {
      rule: 'required',
      errorMessage: 'Укажите email',
    },
    {
      rule: 'email',
      errorMessage: 'Email некорректен',
    },
  ])
 
  const validationAbout = new JustValidate('#about-form');

validationAbout
    .addField('#about-email', [
    {
      rule: 'required',
      errorMessage: 'Укажите email',
    },
    {
      rule: 'email',
      errorMessage: 'Email некорректен',
    },
  ])




    
