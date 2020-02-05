const ADMIN_PASSWORD = 'jqueryismyjam';
let password;

  password = prompt('Введите пароль', '');

  if (password === ADMIN_PASSWORD) {
      alert('Добро пожаловать!');
      
    
  }else if (password === null) {
      alert('Отменено пользователем');

  }else {
      alert('Доступ запрещен, неверный пароль!');
  }

