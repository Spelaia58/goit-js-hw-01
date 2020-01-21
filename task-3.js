let message;
const ADMIN_PASSWORD = 'jqueryismyjam';
let password;

  password = prompt('Введите пароль', '');

  if (password === ADMIN_PASSWORD) {
      message = alert('Добро пожаловать!');
      
    
  }else if (password === null) {
      message = alert('Отменено пользователем');

  }else {
      alert('Доступ запрещен, неверный пароль!');
  }

