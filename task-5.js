let userChoice;
let price;

userChoice = prompt('Выберите страну для доставки');


if(userChoice === null) {
    console.log('Отменено пользователем');
}
userChoice =  userChoice.toLowerCase();
switch(userChoice) {
    case 'китай':
        price = 100;
        alert(`Доставка в ${userChoice} будет стоить ${price} кредитов.`);
        break;
    case 'чили':
        price = 250;
        alert(`Доставка в ${userChoice} будет стоить ${price} кредитов.`);
        break;
    case 'австралия':
        price = 170;
        alert(`Доставка в ${userChoice} будет стоить ${price} кредитов.`);
        break;
    case 'индия':
        price = 80;
        alert(`Доставка в ${userChoice} будет стоить ${price} кредитов.`);
        break;
    case 'ямайка':
        price = 120;
        alert(`Доставка в ${userChoice} будет стоить ${price} кредитов.`);
        break;
        
    default:
        alert('В Вашей стране доставка недоступна!');    
}
